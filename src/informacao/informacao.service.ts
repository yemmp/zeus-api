import {  HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import sequelize from 'sequelize';
import { Atividade } from 'src/atividade/entities/atividade.entity';
import { Midia } from 'src/midia/entities/midia.entity';
import { CreateInformacaoDto } from './dto/create-informacao.dto';
import { UpdateInformacaoDto } from './dto/update-informacao.dto';
import { Informacao } from './entities/informacao.entity';


const EXCLUDED_APP_ATTRIBUTES = ['datCriacao',  'datExclusao', 'indAtivo', 'codConcessionaria', 'codUsuarioCriacao']

@Injectable()
export class InformacaoService {

  constructor(@InjectModel(Informacao) private informacaoModel: typeof Informacao) { }
  async create(createInformacaoDto: CreateInformacaoDto) {
    try {
      await this.informacaoModel.create(createInformacaoDto);
      console.log('Informacao Criada com Sucesso!');
      return 'Informacao Criada com Sucesso!';
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Erro ao criar Informacao`
        },
        HttpStatus.BAD_REQUEST,
        );
        
    }
  }

  async findAll(projecao = 'APP') {
    try {
      const exclude_attr = (projecao == 'APP') ? EXCLUDED_APP_ATTRIBUTES : []
      return this.informacaoModel.findAll({
        include: [
          {
            model: Atividade, 'as': 'atividades',
            attributes: ['nomAtividade'],
            include: [
              {
                model: Midia,
                attributes: ['codTipoMidia', 'nomMidia', 'nomArquivo']
              }
            ]

          }
        ],
        attributes: { exclude: [...exclude_attr] }
        , order: [
          [{ model: Atividade, 'as': 'atividades' }, 'numSequencia', 'ASC']
        ]
      });

    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Erro ao buscar Informacoes`
        },
        HttpStatus.BAD_REQUEST,
        );
        
    }
  }

  async findOne(projecao = 'APP', id: number) {
    try {
      const exclude_attr = (projecao == 'APP') ? EXCLUDED_APP_ATTRIBUTES : []

      return this.informacaoModel.findOne({
        include: [
          {
            model: Atividade, 'as': 'atividades',
            attributes: ['nomAtividade'],
            include: [
              {
                model: Midia,
                attributes: ['codTipoMidia', 'nomMidia', 'nomArquivo']
              }
            ]

          }
        ],
        attributes: { exclude: [...exclude_attr] }
        , order: [
          [{ model: Atividade, 'as': 'atividades' }, 'numSequencia', 'ASC']
        ], where: { codInformacao: id }
      });

    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Erro ao buscar Informacao #${id}`
        },
        HttpStatus.BAD_REQUEST,
        );
        
    }
  }

  async update(id: number, updateInformacaoDto: UpdateInformacaoDto) {
    try {
      Informacao.update(updateInformacaoDto, { where: { codInformacao: id } }).then(() => {
        console.log(`Informacao #${id} Atualizado com Sucesso!`);
        return `Informacao #${id} Atualizada`;
      })
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Erro ao Atualizar Informacao #${id}`
        },
        HttpStatus.BAD_REQUEST,
        );
        
    }
  }

  async remove(id: number) {
    try {
      this.informacaoModel.destroy({ where: { codInformacao: id } });
      return `Informacao #${id} Deletada `;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Erro ao deletar Informacao #${id}`
        },
        HttpStatus.BAD_REQUEST,
        );
        
    }
  }
}

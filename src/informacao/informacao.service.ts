import { BadRequestException, Injectable } from '@nestjs/common';
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
      console.error('Erro ao Criar Informacao', error.message);
      throw new BadRequestException();
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
      console.error('Erro ao Buscar Informacoes', error.message);
      throw new BadRequestException();
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
      console.error(`Erro ao Buscar Informacao #${id}`, error.message);
      throw new BadRequestException();
    }
  }

  async update(id: number, updateInformacaoDto: UpdateInformacaoDto) {
    try {
      Informacao.update(updateInformacaoDto, { where: { codInformacao: id } }).then(() => {
        console.log(`Informacao #${id} Atualizado com Sucesso!`);
        return `Informacao #${id} Atualizada`;
      })
    } catch (error) {
      console.error(`Erro ao Atualizar Informacao #${id}`, error.message);
      throw new BadRequestException();
    }
  }

  async remove(id: number) {
    try {
      this.informacaoModel.destroy({ where: { codInformacao: id } });
      return `Informacao #${id} Deletada `;
    } catch (error) {
      console.error(`Erro ao Deletar Informacao #${id}`, error.message);
    }
  }
}

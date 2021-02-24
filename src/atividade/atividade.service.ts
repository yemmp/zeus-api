import {  HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Midia } from 'src/midia/entities/midia.entity';
import { CreateAtividadeDto } from './dto/create-atividade.dto';
import { UpdateAtividadeDto } from './dto/update-atividade.dto';
import { Atividade } from './entities/atividade.entity';

const EXCLUDED_APP_ATTRIBUTES = ['datCriacao', 'datAtualizacao', 'datExclusao', 'codAtividade', 'codFase', 'numSequencia', 'codTipoAtividade', 'codConcessionaria', 'codUsuarioCriacao', 'codInformacao']

@Injectable()
export class AtividadeService {
  constructor(@InjectModel(Atividade) private atividadeModel: typeof Atividade) { }


  async create(createAtividadeDto: CreateAtividadeDto) {
    try {
      await this.atividadeModel.create(createAtividadeDto);
      console.log('Atividade Criada com Sucesso!');
      return 'Atividade Criada com Sucesso!';
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Erro ao criar Atividade`
        },
        HttpStatus.BAD_REQUEST,
        );
        
    }
  }

  async findAll(projecao = 'APP') {
    try {
      const exclude_attr = (projecao == 'APP') ? EXCLUDED_APP_ATTRIBUTES : []
      return this.atividadeModel.findAll({
        include: { model: Midia, attributes: ['codTipoMidia', 'nomMidia'] },
        attributes: { exclude: [...exclude_attr] }
      });
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Erro ao buscar Atividades`
        },
        HttpStatus.BAD_REQUEST,
        );
        
    }
  }

  async findOne(projecao = 'APP', id: number) {
    try {

      const exclude_attr = (projecao == 'APP') ? EXCLUDED_APP_ATTRIBUTES : []
      return this.atividadeModel.findOne({ attributes: { exclude: [...exclude_attr] }, where: { codAtividade: id } });

    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Erro ao buscar Atividade #${id}`
        },
        HttpStatus.BAD_REQUEST,
        );
        
    }
  }

  async update(id: number, updateAtividadeDto: UpdateAtividadeDto) {
    try {

      Atividade.update(updateAtividadeDto, { where: { codAtividade: id } })
        .then(() => { console.log(`Atividade #${id} Atualizada com Sucesso!`) });
      return `Atividade #${id} Atualizada com Sucesso! `;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Erro ao atualizar Atividade #${id}`
        },
        HttpStatus.BAD_REQUEST,
        );
        
    }


  }

  async remove(id: number) {
    try {

      const deleteAtividade = this.atividadeModel.destroy({ where: { codAtividade: id } });
      console.log(`Atividade #${id} Deletada! ${deleteAtividade} Registros Apagados!`);
      return `This action removes a #${id} atividade`;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Erro ao Deletar Atividade #${id}`
        },
        HttpStatus.BAD_REQUEST,
        );
        
    }

  }
}

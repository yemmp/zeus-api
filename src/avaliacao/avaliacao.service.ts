import {  HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateAvaliacaoDto } from './dto/create-avaliacao.dto';
import { UpdateAvaliacaoDto } from './dto/update-avaliacao.dto';
import { Avaliacao } from './entities/avaliacao.entity';

const EXCLUDED_APP_ATTRIBUTES = ['datCriacao','datAtualizacao','datExclusao','codAvaliacao']

@Injectable()
export class AvaliacaoService {

  constructor(@InjectModel(Avaliacao) private avaliacaoModel: typeof Avaliacao) { }
  async create(createAvaliacaoDto: CreateAvaliacaoDto) {
    try {
      await this.avaliacaoModel.create(createAvaliacaoDto);
      console.log('Avaliacao Criada com Sucesso!');
      return 'Avaliacao Criada com Sucesso!';
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Erro ao criar Avaliacao`
        },
        HttpStatus.BAD_REQUEST,
        );
        
    }
  }

  async findAll(projecao = 'APP') {
    try {
      const exclude_attr = (projecao == 'APP') ? EXCLUDED_APP_ATTRIBUTES : []
      return this.avaliacaoModel.findAll({ attributes: { exclude: [...exclude_attr] } });

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

      return this.avaliacaoModel.findOne({ attributes: { exclude: [...exclude_attr] }, where: { codAvaliacao: id } });


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

  async update(id: number, updateAvaliacaoDto: UpdateAvaliacaoDto) {
    try {
      Avaliacao.update(updateAvaliacaoDto, { where: { codAvaliacao: id } }).then(() => {
        console.log(`Avaliacao #${id} Atualizada com Sucesso!`);
        return `Avaliacao #${id} Atualizada com Sucesso!`;
      })
    } catch (error) {

      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Erro ao Atualizar Atividade #${id}`
        },
        HttpStatus.BAD_REQUEST,
        );
        
    }
  }

  async remove(id: number) {
    try {
      this.avaliacaoModel.destroy({ where: { codAvaliacao: id } });
      return `Avaliacao #${id} Deletada!`;
    } catch (error) {

      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Erro ao deletar Atividade #${id}`
        },
        HttpStatus.BAD_REQUEST,
        );
        
    }
  }
}

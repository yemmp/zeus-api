import {  HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateAvaliacaoDispositivoDto } from './dto/create-avaliacao-dispositivo.dto';
import { UpdateAvaliacaoDispositivoDto } from './dto/update-avaliacao-dispositivo.dto';
import { AvaliacaoDispositivo } from './entities/avaliacao-dispositivo.entity';

const EXCLUDED_APP_ATTRIBUTES = ['datCriacao','datAtualizacao','datExclusao']

@Injectable()
export class AvaliacaoDispositivoService {

  constructor(@InjectModel(AvaliacaoDispositivo) private avaliacaoDispositivoModule: typeof AvaliacaoDispositivo) { }

  async create(createAvaliacaoDispositivoDto: CreateAvaliacaoDispositivoDto) {
    try {
      await this.avaliacaoDispositivoModule.create(createAvaliacaoDispositivoDto);
      console.log('Avaliacao-Dispositivo Criada com Sucesso!');
      return 'Avaliacao-Dispositivo Criada com Sucesso!';
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Erro ao criar Avaliacao-Dispositivo`
        },
        HttpStatus.BAD_REQUEST,
        );
        
    }
  }

  async findAll(projecao = 'APP') {
    try {
      const exclude_attr = (projecao == 'APP') ? EXCLUDED_APP_ATTRIBUTES : []

      return this.avaliacaoDispositivoModule.findAll({ attributes: { exclude: [...exclude_attr] } });

    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Erro ao buscar Avaliacoes-Dispositivo`
        },
        HttpStatus.BAD_REQUEST,
        );
        
    }
  }

  async findOne(projecao = 'APP', id: number) {
    try {
      const exclude_attr = (projecao == 'APP') ? EXCLUDED_APP_ATTRIBUTES : []

      return this.avaliacaoDispositivoModule.findOne({ attributes: { exclude: [...exclude_attr] }, where: { codAvaliacaoDispositivo: id } });

    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Erro ao buscar Avaliacao-Dispositivo #${id}`
        },
        HttpStatus.BAD_REQUEST,
        );
        

    }
  }

  async update(id: number, updateAvaliacaoDispositivoDto: UpdateAvaliacaoDispositivoDto) {
    try {
      AvaliacaoDispositivo.update(updateAvaliacaoDispositivoDto, { where: { codAvaliacaoDispositivo: id } }).then(() => {
        console.log(`Avaliacao-Dispositivo #${id} Atualizada com Sucesso!`);
        return `Atualizacao-Dispositivo #${id} Atualizada com Sucesso!`;
      })
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Erro ao atualizar Avaliacao-Dispositivo #${id}`
        },
        HttpStatus.BAD_REQUEST,
        );
        
    }

  }

  async remove(id: number) {
    try {
      this.avaliacaoDispositivoModule.destroy({ where: { codAvaliacaoDispositivo: id } });
      return `Avaliacao-Dispositivo #${id} Deletada!`;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Erro ao deletar Avaliacao-Dispositivo #${id}`
        },
        HttpStatus.BAD_REQUEST,
        );
        
    }
  }
}

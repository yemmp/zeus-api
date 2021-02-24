import {  HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateDetalheChecklistDto } from './dto/create-detalhe-checklist.dto';
import { UpdateDetalheChecklistDto } from './dto/update-detalhe-checklist.dto';
import { DetalheChecklist } from './entities/detalhe-checklist.entity';

const EXCLUDED_APP_ATTRIBUTES = []

@Injectable()
export class DetalheChecklistService {
  constructor(@InjectModel(DetalheChecklist) private detalheCheckListModule: typeof DetalheChecklist) { }

  async create(createDetalheChecklistDto: CreateDetalheChecklistDto) {
    try {
      this.detalheCheckListModule.create(createDetalheChecklistDto);
      console.log('Detalhe-CheckList criado com Sucesso!');
      return 'Detalhe-CheckList criado com Sucesso!';
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Erro ao criar detalhe-check-list`
        },
        HttpStatus.BAD_REQUEST,
        );
        
    }

  }

  async findAll(projecao = 'APP') {
    try {
      const exclude_attr = (projecao == 'APP') ? EXCLUDED_APP_ATTRIBUTES : []

      return this.detalheCheckListModule.findAll({ attributes: { exclude: [...exclude_attr] } });
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Erro ao buscar detalhe-check-list`
        },
        HttpStatus.BAD_REQUEST,
        );
        
    }

  }

  async findOne(projecao = 'APP', id: number) {
    try {
      const exclude_attr = (projecao == 'APP') ? EXCLUDED_APP_ATTRIBUTES : []
      return this.detalheCheckListModule.findOne({ attributes: { exclude: [...exclude_attr] }, where: { codDetalheCheckList: id } });

    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Erro ao buscar detalhe-check-list #${id}`
        },
        HttpStatus.BAD_REQUEST,
        );
        
    }
  }

  async update(id: number, updateDetalheChecklistDto: UpdateDetalheChecklistDto) {
    try {
      DetalheChecklist.update(updateDetalheChecklistDto, { where: { codDetalheCheckList: id } }).then(() => {
        console.log(`Detalhe-CheckList #${id} Atualizado com Sucesso!`);
        return `Detalhe-CheckList #${id} Atualizado com Sucesso!`;
      })
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Erro ao atualizar detalhe-check-list #${id}`
        },
        HttpStatus.BAD_REQUEST,
        );
        
    }
  }

  async remove(id: number) {
    try {
      this.detalheCheckListModule.destroy({ where: { codDetalheCheckList: id } });
      return `Detalhe-CheckList #${id} Deletada!`;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Erro ao deletar detalhe-check-list #${id}`
        },
        HttpStatus.BAD_REQUEST,
        );
        
    }
  }
}

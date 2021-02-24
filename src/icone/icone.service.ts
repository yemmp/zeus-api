import {  HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateIconeDto } from './dto/create-icone.dto';
import { UpdateIconeDto } from './dto/update-icone.dto';
import { Icone } from './entities/icone.entity';

const EXCLUDED_APP_ATTRIBUTES = ['nomDiretorio', 'indAtivo', 'codUsuarioCriacao', 'dscIcone', 'nomIcone', 'datCriacao', 'datAtualizacao', 'datExclusao']

@Injectable()
export class IconeService {

  constructor(@InjectModel(Icone) private iconeModel: typeof Icone) { }
  async create(createIconeDto: CreateIconeDto) {
    try {
      await this.iconeModel.create(createIconeDto);
      console.log('Icone Criado com Sucesso!')
      return 'Icone Criado com Sucesso!';
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Erro ao criar Icone `
        },
        HttpStatus.BAD_REQUEST,
        );
        
    }
  }

  async findAll(projecao = 'APP') {
    try {
      const exclude_attr = (projecao == 'APP') ? EXCLUDED_APP_ATTRIBUTES : []
      return this.iconeModel.findAll({ attributes: { exclude: [...exclude_attr] } });

    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Erro ao buscar Icones`
        },
        HttpStatus.BAD_REQUEST,
        );
        
    }
  }

  async findOne(projecao = 'APP', id: number) {
    try {
      const exclude_attr = (projecao == 'APP') ? EXCLUDED_APP_ATTRIBUTES : []
      return this.iconeModel.findOne({ attributes: { exclude: [...exclude_attr] }, where: { codIcone: id } });

    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Erro ao buscar Icone #${id}`
        },
        HttpStatus.BAD_REQUEST,
        );
        
    }
  }

  async update(id: number, updateIconeDto: UpdateIconeDto) {
    try {
      Icone.update(updateIconeDto, { where: { codIcone: id } }).then(() => {
        console.log(`Icone #${id} Atualizado com Sucesso!`);
        return `Icone #${id} Atualizado com Sucesso!`;
      })
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Erro ao Atualizar Icone #${id}`
        },
        HttpStatus.BAD_REQUEST,
        );
        
    }
  }

  async remove(id: number) {
    try {
      this.iconeModel.destroy({ where: { codIcone: id } });
      return `Icone #${id} Deletado!`;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Erro ao  deletar Icone #${id}`
        },
        HttpStatus.BAD_REQUEST,
        );
        
    }
  }
}

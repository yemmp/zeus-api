import {  HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateMidiaDto } from './dto/create-midia.dto';
import { UpdateMidiaDto } from './dto/update-midia.dto';
import { Midia } from './entities/midia.entity';

const EXCLUDED_APP_ATTRIBUTES = ['datExclusao', 'datCriacao', 'datAtualizacao', 'nomMidia', 'nomDiretorio', 'indAtivo', 'codConcessionaria', 'codUsuarioCriacao']

@Injectable()
export class MidiaService {

  constructor(@InjectModel(Midia) private midiaModel: typeof Midia) { }

  async create(createMidiaDto: CreateMidiaDto) {
    try {
      await this.midiaModel.create(createMidiaDto);
      console.log('Midia Criada com Sucesso');
      return 'Midia Criada com Sucesso';
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Erro ao criar Midia`
        },
        HttpStatus.BAD_REQUEST,
        );
        
    }
  }

  async findAll(projecao = 'APP') {
    try {
      const exclude_attr = (projecao == 'APP') ? EXCLUDED_APP_ATTRIBUTES : []

      return this.midiaModel.findAll({ attributes: { exclude: [...exclude_attr] } });

    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Erro ao buscar Midias`
        },
        HttpStatus.BAD_REQUEST,
        );
        
    }
  }

  async findOne(projecao = 'APP', id: number) {
    try {
      const exclude_attr = (projecao == 'APP') ? EXCLUDED_APP_ATTRIBUTES : []
      return this.midiaModel.findOne({ attributes: { exclude: [...exclude_attr] }, where: { codMidia: id } });

    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Erro ao buscar Midia #${id}`
        },
        HttpStatus.BAD_REQUEST,
        );
        
    }
  }

  async update(id: number, updateMidiaDto: UpdateMidiaDto) {
    try {
      Midia.update(updateMidiaDto, { where: { codMidia: id } }).then(() => {
        console.log(`Midia #${id} Atualizada com Sucesso!`);
        return `Midia #${id} Atualizada com Sucesso!`;
      })
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Erro ao Atualizar Midia #${id}`
        },
        HttpStatus.BAD_REQUEST,
        );
        
    }
  }

  async remove(id: number) {
    try {

      const deleteMidia = this.midiaModel.destroy({ where: { codMidia: id } });
      console.log(`Midia #${id} Deletada! ${deleteMidia} Registros Apagados!`);
      return `Midia #${id} Deletada! `;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Erro ao deletar Midia #${id}`
        },
        HttpStatus.BAD_REQUEST,
        );
        
    }
  }
}

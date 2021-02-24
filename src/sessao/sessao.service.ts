import {HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateSessaoDto } from './dto/create-sessao.dto';
import { UpdateSessaoDto } from './dto/update-sessao.dto';
import { Sessao } from './entities/sessao.entity';

const EXCLUDED_APP_ATTRIBUTES = ['']

@Injectable()
export class SessaoService {
  constructor(@InjectModel(Sessao) private sessaoModel: typeof Sessao) { }
  async create(createSessaoDto: CreateSessaoDto) {
    try {
      await this.sessaoModel.create(createSessaoDto);
      console.log('Sessao Criada com Sucesso');
      return 'Sessao Criada com Sucesso';

    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Erro ao criar Sessao`
        },
        HttpStatus.BAD_REQUEST,
        );
        
    }
  }

  async findAll(projecao = 'APP') {
    try {
      const exclude_attr = (projecao == 'APP') ? EXCLUDED_APP_ATTRIBUTES : []
      return this.sessaoModel.findAll({ attributes: { exclude: [...exclude_attr] } });

    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Erro ao buscar Sessoes}`
        },
        HttpStatus.BAD_REQUEST,
        );
        

    }
  }

  async findOne(projecao = 'APP', id: number) {
    try {
      const exclude_attr = (projecao == 'APP') ? EXCLUDED_APP_ATTRIBUTES : []
      return this.sessaoModel.findOne({ attributes: { exclude: [...exclude_attr] }, where: { codSessao: id } });

    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Erro ao buscar Sessao #${id}`
        },
        HttpStatus.BAD_REQUEST,
        );
        
    }
  }

  async update(id: number, updateSessaoDto: UpdateSessaoDto) {
    try {
      Sessao.update(updateSessaoDto, {
        where: { codSessao: id }
      }).then(() => {
        console.log(`Sessão nº=${id}atualizada com sucesso `);
        return `Sessao nº=${id} Atualizada com Sucesso`;
      });

    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Erro ao Atualizar Sessao #${id}`
        },
        HttpStatus.BAD_REQUEST,
        );
        
    }
  }

  async remove(id: number) {
    try {
      const deleteSession = this.sessaoModel.destroy({
        where: { codSessao: id }
      });
      console.log`Registros da sessão #${id} removidos!`
      return `Sessao nº=${id} Deletada!`;

    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Erro ao deletar Sessao #${id}`
        },
        HttpStatus.BAD_REQUEST,
        );
        
    }
  }
}

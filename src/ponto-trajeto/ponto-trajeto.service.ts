import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreatePontoTrajetoDto } from './dto/create-ponto-trajeto.dto';
import { UpdatePontoTrajetoDto } from './dto/update-ponto-trajeto.dto';
import { PontoTrajeto } from './entities/ponto-trajeto.entity';

const EXCLUDED_APP_ATTRIBUTE = ['']

@Injectable()
export class PontoTrajetoService {

  constructor(@InjectModel(PontoTrajeto) private pontoTrajetoModel: typeof PontoTrajeto) { }

  async create(createPontoTrajetoDto: CreatePontoTrajetoDto) {
    try {

      await this.pontoTrajetoModel.create(createPontoTrajetoDto);
      console.log('Ponto-Trajeto Criado com Sucesso!');
      return 'Ponto-Trajeto Criado com Sucesso!';
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Erro ao criar Ponto-Trajeto`
        },
        HttpStatus.BAD_REQUEST,
        );
        
    }
  }

  async bulkCreate(createPontoTrajetoDto: [CreatePontoTrajetoDto]) {
    try {

      await this.pontoTrajetoModel.bulkCreate(createPontoTrajetoDto);
      console.log('Ponto-Trajeto Criado com Sucesso!');
      return 'Ponto-Trajeto Criado com Sucesso!';
    } catch (error) {
       throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Erro ao criar Ponto-Trajeto`
        },
        HttpStatus.BAD_REQUEST,
        );
        
    }
  }

  async findAll(projecao = 'APP') {
    try {
      const exclude_attr = (projecao == 'APP') ? EXCLUDED_APP_ATTRIBUTE : []
      return this.pontoTrajetoModel.findAll({ attributes: { exclude: [...exclude_attr] } });

    } catch (error) {

      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Erro ao buscar Pontos-Trajeto`
        },
        HttpStatus.BAD_REQUEST,
        );
        

    }
  }

  async findOne(projecao = 'APP', id: number) {
    try {
      const exclude_attr = (projecao == 'APP') ? EXCLUDED_APP_ATTRIBUTE : []
      return this.pontoTrajetoModel.findOne({ attributes: { exclude: [...exclude_attr] }, where: { codPontoTrajeto: id } });
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Erro ao buscar Ponto-Trajeto #${id}`
        },
        HttpStatus.BAD_REQUEST,
        );
        
    }
  }

  async update(id: number, updatePontoTrajetoDto: UpdatePontoTrajetoDto) {
    try {
      PontoTrajeto.update(updatePontoTrajetoDto, { where: { codPontoTrajeto: id } })
        .then(() => {
          console.log(`Ponto-Trajeto #${id} Atualizado com Sucesso!`)
        });
      return `Ponto-Trajeto #${id} Atualizado com Sucesso!`;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Erro ao Atualizar Ponto-Trajeto #${id}`
        },
        HttpStatus.BAD_REQUEST,
        );
        
    }
  }

  async remove(id: number) {
    try {
      const deletePontoTrajeto = this.pontoTrajetoModel.destroy({ where: { codPontoTrajeto: id } });
      console.log(`Ponto-Trajeto #${id} Deletado! ${deletePontoTrajeto} Registros Apagados!`);
      return `Ponto-Trajeto #${id} Deletado!`;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Erro ao Deletar Ponto-Trajeto #${id}`
        },
        HttpStatus.BAD_REQUEST,
        );
        
    }
  }

  async removeByCodTrajeto(id: number) {
    try {
      const deletePontoTrajeto = this.pontoTrajetoModel.destroy({ where: { codTrajeto: id } });
      console.log(`Ponto-Trajeto relacionados ao trajeto #${id} foram deletados Deletado! ${deletePontoTrajeto} Registros Apagados!`);
      return `Ponto-Trajetos do trajecto #${id} foram Deletados!`;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Erro ao deletar Ponto Trajeto #${id}`
        },
        HttpStatus.BAD_REQUEST,
        );
        
    }
  }

}

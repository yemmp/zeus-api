import {  HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { PontoRota } from 'src/ponto-rota/entities/ponto-rota.entity';
import { PontoTrajeto } from 'src/ponto-trajeto/entities/ponto-trajeto.entity';
import { Trajeto } from 'src/trajeto/entities/trajeto.entity';
import { CreateRotaDto } from './dto/create-rota.dto';
import { UpdateRotaDto } from './dto/update-rota.dto';
import { Rota } from './entities/rota.entity';

const EXCLUDED_APP_ATTRIBUTES = ['codTrajeto', 'indAtivo', 'codConcessionaria', 'codUsuarioCriacao', 'datCriacao',  'datExclusao']


@Injectable()
export class RotaService {

  constructor(@InjectModel(Rota) private rotaModel: typeof Rota) { }

  async create(createRotaDto: CreateRotaDto) {
    try {
      await this.rotaModel.create(createRotaDto);
      console.log('Rota Criada com Sucesso!')
      return 'Rota Criada com Sucesso!';
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Erro ao criar Rota`
        },
        HttpStatus.BAD_REQUEST,
        );
        
    }
  }

  async findAll(projecao = 'APP') {
    try {
      const exclude_attr = (projecao == 'APP') ? EXCLUDED_APP_ATTRIBUTES : []
      Trajeto.hasMany(PontoTrajeto);
      PontoTrajeto.belongsTo(Trajeto);
      return this.rotaModel.findAll({
        include: [
          {
            model: Trajeto,
            attributes: ['nomTrajeto', 'qtdPontos'],
            include: [
              {
                model: PontoTrajeto,
                attributes: ['numPosicaoX', 'numPosicaoY'],

              },

            ],
          },
          {
            model: PontoRota,
            //right: true,
            attributes: ['numPosicaoX', 'numPosicaoY','dscTextoVisual','dscTextoNarrado']
          },


        ]
        , attributes: { exclude: [...exclude_attr] },
        order: [
          [{ model: PontoRota, 'as': 'pontosRota' }, 'numSequencia', 'ASC'],
          [{ model: Trajeto, 'as': 'trajeto' }, { model: PontoTrajeto, 'as': 'pontosTrajeto' }, 'numSequencia', 'ASC']
        ]
      });
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Erro ao buscar Rotas`
        },
        HttpStatus.BAD_REQUEST,
        );
        
    }

  }

  async findOne(projecao = 'APP', id: number) {

    Trajeto.hasMany(PontoTrajeto);
    PontoTrajeto.belongsTo(Trajeto);
    try {
      const exclude_attr = (projecao == 'APP') ? EXCLUDED_APP_ATTRIBUTES : []

      return this.rotaModel.findOne({
        include: [
          {
            model: Trajeto,
            attributes: ['nomTrajeto', 'qtdPontos'],
            include:
              [
                {
                  model: PontoTrajeto,
                  attributes: ['numPosicaoX', 'numPosicaoY'],
                },
              ],
          },
          {
            model: PontoRota,
            right: true,
            attributes: ['numPosicaoX', 'numPosicaoY','dscTextoVisual','dscTextoNarrado']
          },

        ]
        , attributes: { exclude: [...exclude_attr] },
        order: [
          [{ model: PontoRota, 'as': 'pontosRota' }, 'numSequencia', 'ASC'],
          [{ model: Trajeto, 'as': 'trajeto' }, { model: PontoTrajeto, 'as': 'pontosTrajeto' }, 'numSequencia', 'ASC']

        ]
        , where: { codRota: id }
      });
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Erro ao buscar Rota #${id}`
        },
        HttpStatus.BAD_REQUEST,
        );
        
    }
  }

  async update(id: number, updateRotaDto: UpdateRotaDto) {
    try {
      Rota.update(updateRotaDto, { where: { codRota: id } }).then(() =>
        console.log(`Rota #${id} Atualizada com Sucesso!`));
      return `Rota #${id} Atualizada com Sucesso!`;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Erro ao Atualizar Rota #${id}`
        },
        HttpStatus.BAD_REQUEST,
        );
        
    }
  }

  async remove(id: number) {
    try {
      const deleteRota = this.rotaModel.destroy({ where: { codRota: id } });
      console.log(`Rota #${id} Deletada! ${deleteRota} Registros Apagados!`);
      return `Rota #${id} Deletada!`;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Erro ao deletar Rota #${id}`
        },
        HttpStatus.BAD_REQUEST,
        );
        
    }
  }
}

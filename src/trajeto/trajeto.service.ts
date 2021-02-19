import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { PontoTrajeto } from 'src/ponto-trajeto/entities/ponto-trajeto.entity';
import { CreateTrajetoDto } from './dto/create-trajeto.dto';
import { UpdateTrajetoDto } from './dto/update-trajeto.dto';
import { Trajeto } from './entities/trajeto.entity';

const EXCLUDE_APP_ATTRIBUTES = ['']

@Injectable()
export class TrajetoService {

  constructor(@InjectModel(Trajeto) private trajetoModel: typeof Trajeto) { }

  async create(createTrajetoDto: CreateTrajetoDto) {
    try {
      let trajetoCriado = await this.trajetoModel.create(createTrajetoDto);
      console.log('Trajeto Criado com Sucesso');
      return {codTrajeto: trajetoCriado.codTrajeto};
    } catch (error) {
      console.error('Erro ao Criar Trajeto', error.message);
      throw new BadRequestException();
    }
  }

  async findAll(projecao = 'APP') {
    try {
      const exclude_attr = (projecao == 'APP') ? EXCLUDE_APP_ATTRIBUTES : []
      return this.trajetoModel.findAll({ 
        include: [{
          model: PontoTrajeto,
          attributes: ['nomPontoTrajeto', 'numSequencia', 'numPosicaoX', 'numPosicaoY']
        }],
        attributes: { 
          exclude: [...exclude_attr] 
        } 
      });

    } catch (error) {
      console.error(`Erro ao Buscar Trajetos`, error.message);
      throw new BadRequestException();
    }
  }

  async findOne(projecao = 'APP', id: number) {
    try {
      const exclude_attr = (projecao == 'APP') ? EXCLUDE_APP_ATTRIBUTES : []

      return this.trajetoModel.findOne({ 
        include: [{
          model: PontoTrajeto,
          attributes: ['nomPontoTrajeto', 'numSequencia', 'numPosicaoX', 'numPosicaoY']
        }],
        attributes: { 
          exclude: [...exclude_attr] 
        }, 
        where: { codTrajeto: id } });
    } catch (error) {
      console.error(`Erro ao Buscar Trajeto #${id}`, error.message);
      throw new BadRequestException();
    }

  }

  async update(id: number, updateTrajetoDto: UpdateTrajetoDto) {
    try {
      Trajeto.update(updateTrajetoDto, { where: { codTrajeto: id } }).then(() => {
        console.log(`Trajeto #${id} Atualizado com Sucesso!`);
      })
      return `Trajeto #${id} Atualizado com Sucesso!`;
    } catch (error) {

      console.error(`Erro ao Atualizar Trajeto #${id}`, error.message);
      throw new BadRequestException();
    }
  }

  async remove(id: number) {
    try {
      const deleteTrajeto = this.trajetoModel.destroy({ where: { codTrajeto: id } });
      console.log(`Trajeto #${id} Deletado! ${deleteTrajeto} Registros Apagados!`);
      return `Trajeto #${id} Deletado!`;
    } catch (error) {
      console.error(`Erro ao Deletar Trajeto #${id}`, error.message);
      throw new BadRequestException();
    }
  }
}

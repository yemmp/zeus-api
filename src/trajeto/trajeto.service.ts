import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTrajetoDto } from './dto/create-trajeto.dto';
import { UpdateTrajetoDto } from './dto/update-trajeto.dto';
import { Trajeto } from './entities/trajeto.entity';

const EXCLUDE_APP_ATTRIBUTES = ['']

@Injectable()
export class TrajetoService {

  constructor(@InjectModel(Trajeto) private trajetoModel: typeof Trajeto) { }

  async create(createTrajetoDto: CreateTrajetoDto) {
    try {
      await this.trajetoModel.create(createTrajetoDto);
      console.log('Trajeto Criado com Sucesso');
      return 'Trajeto Criado com Sucesso';
    } catch (error) {
      console.error('Erro ao Criar Trajeto', error.message);
      throw new BadRequestException();
    }
  }

  async findAll(projecao = 'APP') {
    try {
      const exclude_attr = (projecao == 'APP') ? EXCLUDE_APP_ATTRIBUTES : []
      return this.trajetoModel.findAll({ attributes: { exclude: [...exclude_attr] } });

    } catch (error) {
      console.error(`Erro ao Buscar Trajetos`, error.message);
      throw new BadRequestException();
    }
  }

  async findOne(projecao = 'APP', id: number) {
    try {
      const exclude_attr = (projecao == 'APP') ? EXCLUDE_APP_ATTRIBUTES : []

      return this.trajetoModel.findOne({ attributes: { exclude: [...exclude_attr] }, where: { codTrajeto: id } });
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
    } catch (error) {

      console.error(`Erro ao Atualizar Trajeto #${id}`, error.message);
      throw new BadRequestException();
    }
    return `Trajeto #${id} Atualizado com Sucesso!`;
  }

  async remove(id: number) {
    try {
      const deleteTrajeto = this.trajetoModel.destroy({ where: { codTrajeto: id } });
      console.log(`Trajeto #${id} Deletado! ${deleteTrajeto} Registros Apagados!`);

    } catch (error) {
      console.error(`Erro ao Deletar Trajeto #${id}`, error.message);
      throw new BadRequestException();
    }
    return `Trajeto #${id} Deletado!`;
  }
}

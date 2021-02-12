import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreatePontoRotaDto } from './dto/create-ponto-rota.dto';
import { UpdatePontoRotaDto } from './dto/update-ponto-rota.dto';
import { PontoRota } from './entities/ponto-rota.entity';

const EXCLUDED_APP_ATTRIBUTES = ['']

@Injectable()
export class PontoRotaService {
  constructor(@InjectModel(PontoRota) private pontoRotaModel: typeof PontoRota) { }
  async create(createPontoRotaDto: CreatePontoRotaDto) {
    try {
      await this.pontoRotaModel.create(createPontoRotaDto);
      console.log('Ponto-Rota Criado com Sucesso');
      return 'Ponto-Rota Criado com Sucesso';
    } catch (error) {
      console.error('Erro ao Criar Ponto-Rota', error.message);
      throw new BadRequestException();
    }
  }

  async findAll(projecao = 'APP') {
    try {
      const exclude_attr = (projecao == 'APP') ? EXCLUDED_APP_ATTRIBUTES : []
      return this.pontoRotaModel.findAll({ attributes: { exclude: [...exclude_attr] } });

    } catch (error) {
      console.error('Erro ao Buscar Pontos-Rota', error.message);
      throw new BadRequestException();
    }
  }

  async findOne(projecao = 'APP', id: number) {
    try {
      const exclude_attr = (projecao == 'APP') ? EXCLUDED_APP_ATTRIBUTES : []
      return this.pontoRotaModel.findOne({ attributes: { exclude: [...exclude_attr] }, where: { codPontoRota: id } });

    } catch (error) {
      console.error(`Erro ao Buscar Ponto-Rota #${id}`, error.message)
      throw new BadRequestException();
    }
  }

  async update(id: number, updatePontoRotaDto: UpdatePontoRotaDto) {
    try {
      PontoRota.update(updatePontoRotaDto, { where: { codPontoRota: id } }).then(() => {
        console.log(`Ponto-Rota #${id} Atualizado com Sucesso`);
        return `Ponto-Rota #${id} Atualizado com Sucesso`;
      })
    } catch (error) {
      console.error(`Erro ao Atualizar Ponto-Rota #${id}`, error.message);
    }
  }

  async remove(id: number) {
    try {
      this.pontoRotaModel.destroy({ where: { codPontoRota: id } });
      return `Ponto-Rota #${id} Deletado!`;
    } catch (error) {
      console.error(`Erro ao Deletar Ponto-Rota #${id}`, error.message);
      throw new BadRequestException();
    }
  }
}

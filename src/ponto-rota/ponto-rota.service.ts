import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreatePontoRotaDto } from './dto/create-ponto-rota.dto';
import { UpdatePontoRotaDto } from './dto/update-ponto-rota.dto';
import { PontoRota } from './entities/ponto-rota.entity';

@Injectable()
export class PontoRotaService {
  constructor(@InjectModel(PontoRota)private pontoRotaModel: typeof PontoRota){}
  async create(createPontoRotaDto: CreatePontoRotaDto) {
    return 'This action adds a new pontoRota';
  }

  async findAll() {
    return `This action returns all pontoRota`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} pontoRota`;
  }

  async update(id: number, updatePontoRotaDto: UpdatePontoRotaDto) {
    return `This action updates a #${id} pontoRota`;
  }

  async remove(id: number) {
    return `This action removes a #${id} pontoRota`;
  }
}

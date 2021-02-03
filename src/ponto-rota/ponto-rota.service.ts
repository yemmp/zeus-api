import { Injectable } from '@nestjs/common';
import { CreatePontoRotaDto } from './dto/create-ponto-rota.dto';
import { UpdatePontoRotaDto } from './dto/update-ponto-rota.dto';

@Injectable()
export class PontoRotaService {
  create(createPontoRotaDto: CreatePontoRotaDto) {
    return 'This action adds a new pontoRota';
  }

  findAll() {
    return `This action returns all pontoRota`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pontoRota`;
  }

  update(id: number, updatePontoRotaDto: UpdatePontoRotaDto) {
    return `This action updates a #${id} pontoRota`;
  }

  remove(id: number) {
    return `This action removes a #${id} pontoRota`;
  }
}

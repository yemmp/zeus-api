import { Injectable } from '@nestjs/common';
import { CreatePontoTrajetoDto } from './dto/create-ponto-trajeto.dto';
import { UpdatePontoTrajetoDto } from './dto/update-ponto-trajeto.dto';

@Injectable()
export class PontoTrajetoService {
  create(createPontoTrajetoDto: CreatePontoTrajetoDto) {
    return 'This action adds a new pontoTrajeto';
  }

  findAll() {
    return `This action returns all pontoTrajeto`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pontoTrajeto`;
  }

  update(id: number, updatePontoTrajetoDto: UpdatePontoTrajetoDto) {
    return `This action updates a #${id} pontoTrajeto`;
  }

  remove(id: number) {
    return `This action removes a #${id} pontoTrajeto`;
  }
}

import { Injectable } from '@nestjs/common';
import { CreateTrajetoDto } from './dto/create-trajeto.dto';
import { UpdateTrajetoDto } from './dto/update-trajeto.dto';

@Injectable()
export class TrajetoService {
  create(createTrajetoDto: CreateTrajetoDto) {
    return 'This action adds a new trajeto';
  }

  findAll() {
    return `This action returns all trajeto`;
  }

  findOne(id: number) {
    return `This action returns a #${id} trajeto`;
  }

  update(id: number, updateTrajetoDto: UpdateTrajetoDto) {
    return `This action updates a #${id} trajeto`;
  }

  remove(id: number) {
    return `This action removes a #${id} trajeto`;
  }
}

import { Injectable } from '@nestjs/common';
import { CreateRotaFaseDto } from './dto/create-rota-fase.dto';
import { UpdateRotaFaseDto } from './dto/update-rota-fase.dto';

@Injectable()
export class RotaFaseService {
  create(createRotaFaseDto: CreateRotaFaseDto) {
    return 'This action adds a new rotaFase';
  }

  findAll() {
    return `This action returns all rotaFase`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rotaFase`;
  }

  update(id: number, updateRotaFaseDto: UpdateRotaFaseDto) {
    return `This action updates a #${id} rotaFase`;
  }

  remove(id: number) {
    return `This action removes a #${id} rotaFase`;
  }
}

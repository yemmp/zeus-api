import { Injectable } from '@nestjs/common';
import { CreateRotaDto } from './dto/create-rota.dto';
import { UpdateRotaDto } from './dto/update-rota.dto';

@Injectable()
export class RotaService {
  create(createRotaDto: CreateRotaDto) {
    return 'This action adds a new rota';
  }

  findAll() {
    return `This action returns all rota`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rota`;
  }

  update(id: number, updateRotaDto: UpdateRotaDto) {
    return `This action updates a #${id} rota`;
  }

  remove(id: number) {
    return `This action removes a #${id} rota`;
  }
}

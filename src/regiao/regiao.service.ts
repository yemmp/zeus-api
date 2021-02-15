import { Injectable } from '@nestjs/common';
import { CreateRegiaoDto } from './dto/create-regiao.dto';
import { UpdateRegiaoDto } from './dto/update-regiao.dto';

@Injectable()
export class RegiaoService {
  create(createRegiaoDto: CreateRegiaoDto) {
    return 'This action adds a new regiao';
  }

  findAll() {
    return `This action returns all regiao`;
  }

  findOne(id: number) {
    return `This action returns a #${id} regiao`;
  }

  update(id: number, updateRegiaoDto: UpdateRegiaoDto) {
    return `This action updates a #${id} regiao`;
  }

  remove(id: number) {
    return `This action removes a #${id} regiao`;
  }
}

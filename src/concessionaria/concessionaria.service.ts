import { Injectable } from '@nestjs/common';
import { CreateConcessionariaDto } from './dto/create-concessionaria.dto';
import { UpdateConcessionariaDto } from './dto/update-concessionaria.dto';

@Injectable()
export class ConcessionariaService {
  create(createConcessionariaDto: CreateConcessionariaDto) {
    return 'This action adds a new concessionaria';
  }

  findAll() {
    return `This action returns all concessionaria`;
  }

  findOne(id: number) {
    return `This action returns a #${id} concessionaria`;
  }

  update(id: number, updateConcessionariaDto: UpdateConcessionariaDto) {
    return `This action updates a #${id} concessionaria`;
  }

  remove(id: number) {
    return `This action removes a #${id} concessionaria`;
  }
}

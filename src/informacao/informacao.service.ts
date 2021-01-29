import { Injectable } from '@nestjs/common';
import { CreateInformacaoDto } from './dto/create-informacao.dto';
import { UpdateInformacaoDto } from './dto/update-informacao.dto';

@Injectable()
export class InformacaoService {
  create(createInformacaoDto: CreateInformacaoDto) {
    return 'This action adds a new informacao';
  }

  findAll() {
    return `This action returns all informacao`;
  }

  findOne(id: number) {
    return `This action returns a #${id} informacao`;
  }

  update(id: number, updateInformacaoDto: UpdateInformacaoDto) {
    return `This action updates a #${id} informacao`;
  }

  remove(id: number) {
    return `This action removes a #${id} informacao`;
  }
}

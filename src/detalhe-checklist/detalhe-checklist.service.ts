import { Injectable } from '@nestjs/common';
import { CreateDetalheChecklistDto } from './dto/create-detalhe-checklist.dto';
import { UpdateDetalheChecklistDto } from './dto/update-detalhe-checklist.dto';

@Injectable()
export class DetalheChecklistService {
  create(createDetalheChecklistDto: CreateDetalheChecklistDto) {
    return 'This action adds a new detalheChecklist';
  }

  findAll() {
    return `This action returns all detalheChecklist`;
  }

  findOne(id: number) {
    return `This action returns a #${id} detalheChecklist`;
  }

  update(id: number, updateDetalheChecklistDto: UpdateDetalheChecklistDto) {
    return `This action updates a #${id} detalheChecklist`;
  }

  remove(id: number) {
    return `This action removes a #${id} detalheChecklist`;
  }
}

import { Injectable } from '@nestjs/common';
import { CreateTipoFaseDto } from './dto/create-tipo-fase.dto';
import { UpdateTipoFaseDto } from './dto/update-tipo-fase.dto';

@Injectable()
export class TipoFaseService {
  create(createTipoFaseDto: CreateTipoFaseDto) {
    return 'This action adds a new tipoFase';
  }

  findAll() {
    return `This action returns all tipoFase`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tipoFase`;
  }

  update(id: number, updateTipoFaseDto: UpdateTipoFaseDto) {
    return `This action updates a #${id} tipoFase`;
  }

  remove(id: number) {
    return `This action removes a #${id} tipoFase`;
  }
}

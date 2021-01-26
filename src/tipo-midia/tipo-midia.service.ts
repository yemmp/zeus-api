import { Injectable } from '@nestjs/common';
import { CreateTipoMidiaDto } from './dto/create-tipo-midia.dto';
import { UpdateTipoMidiaDto } from './dto/update-tipo-midia.dto';

@Injectable()
export class TipoMidiaService {
  create(createTipoMidiaDto: CreateTipoMidiaDto) {
    return 'This action adds a new tipoMidia';
  }

  findAll() {
    return `This action returns all tipoMidia`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tipoMidia`;
  }

  update(id: number, updateTipoMidiaDto: UpdateTipoMidiaDto) {
    return `This action updates a #${id} tipoMidia`;
  }

  remove(id: number) {
    return `This action removes a #${id} tipoMidia`;
  }
}

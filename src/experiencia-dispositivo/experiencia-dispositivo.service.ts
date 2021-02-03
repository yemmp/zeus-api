import { Injectable } from '@nestjs/common';
import { CreateExperienciaDispositivoDto } from './dto/create-experiencia-dispositivo.dto';
import { UpdateExperienciaDispositivoDto } from './dto/update-experiencia-dispositivo.dto';

@Injectable()
export class ExperienciaDispositivoService {
  create(createExperienciaDispositivoDto: CreateExperienciaDispositivoDto) {
    return 'This action adds a new experienciaDispositivo';
  }

  findAll() {
    return `This action returns all experienciaDispositivo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} experienciaDispositivo`;
  }

  update(id: number, updateExperienciaDispositivoDto: UpdateExperienciaDispositivoDto) {
    return `This action updates a #${id} experienciaDispositivo`;
  }

  remove(id: number) {
    return `This action removes a #${id} experienciaDispositivo`;
  }
}

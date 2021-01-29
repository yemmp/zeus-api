import { Injectable } from '@nestjs/common';
import { CreateAvaliacaoDispositivoDto } from './dto/create-avaliacao-dispositivo.dto';
import { UpdateAvaliacaoDispositivoDto } from './dto/update-avaliacao-dispositivo.dto';

@Injectable()
export class AvaliacaoDispositivoService {
  create(createAvaliacaoDispositivoDto: CreateAvaliacaoDispositivoDto) {
    return 'This action adds a new avaliacaoDispositivo';
  }

  findAll() {
    return `This action returns all avaliacaoDispositivo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} avaliacaoDispositivo`;
  }

  update(id: number, updateAvaliacaoDispositivoDto: UpdateAvaliacaoDispositivoDto) {
    return `This action updates a #${id} avaliacaoDispositivo`;
  }

  remove(id: number) {
    return `This action removes a #${id} avaliacaoDispositivo`;
  }
}

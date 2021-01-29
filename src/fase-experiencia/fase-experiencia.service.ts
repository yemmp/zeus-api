import { Injectable } from '@nestjs/common';
import { CreateFaseExperienciaDto } from './dto/create-fase-experiencia.dto';
import { UpdateFaseExperienciaDto } from './dto/update-fase-experiencia.dto';

@Injectable()
export class FaseExperienciaService {
  create(createFaseExperienciaDto: CreateFaseExperienciaDto) {
    return 'This action adds a new faseExperiencia';
  }

  findAll() {
    return `This action returns all faseExperiencia`;
  }

  findOne(id: number) {
    return `This action returns a #${id} faseExperiencia`;
  }

  update(id: number, updateFaseExperienciaDto: UpdateFaseExperienciaDto) {
    return `This action updates a #${id} faseExperiencia`;
  }

  remove(id: number) {
    return `This action removes a #${id} faseExperiencia`;
  }
}

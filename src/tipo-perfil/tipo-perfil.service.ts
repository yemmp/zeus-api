import { Injectable } from '@nestjs/common';
import { CreateTipoPerfilDto } from './dto/create-tipo-perfil.dto';
import { UpdateTipoPerfilDto } from './dto/update-tipo-perfil.dto';

@Injectable()
export class TipoPerfilService {
  create(createTipoPerfilDto: CreateTipoPerfilDto) {
    return 'This action adds a new tipoPerfil';
  }

  findAll() {
    return `This action returns all tipoPerfil`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tipoPerfil`;
  }

  update(id: number, updateTipoPerfilDto: UpdateTipoPerfilDto) {
    return `This action updates a #${id} tipoPerfil`;
  }

  remove(id: number) {
    return `This action removes a #${id} tipoPerfil`;
  }
}

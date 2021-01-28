import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { TipoPerfilService } from './tipo-perfil.service';
import { CreateTipoPerfilDto } from './dto/create-tipo-perfil.dto';
import { UpdateTipoPerfilDto } from './dto/update-tipo-perfil.dto';

@Controller('tipo-perfil')
export class TipoPerfilController {
  constructor(private readonly tipoPerfilService: TipoPerfilService) {}

  @Post()
  create(@Body() createTipoPerfilDto: CreateTipoPerfilDto) {
    return this.tipoPerfilService.create(createTipoPerfilDto);
  }

  @Get()
  findAll() {
    return this.tipoPerfilService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipoPerfilService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateTipoPerfilDto: UpdateTipoPerfilDto) {
    return this.tipoPerfilService.update(id, updateTipoPerfilDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipoPerfilService.remove(id);
  }
}

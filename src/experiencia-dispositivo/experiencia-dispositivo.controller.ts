import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ExperienciaDispositivoService } from './experiencia-dispositivo.service';
import { CreateExperienciaDispositivoDto } from './dto/create-experiencia-dispositivo.dto';
import { UpdateExperienciaDispositivoDto } from './dto/update-experiencia-dispositivo.dto';

@Controller('experiencia-dispositivo')
export class ExperienciaDispositivoController {
  constructor(private readonly experienciaDispositivoService: ExperienciaDispositivoService) {}

  @Post()
  create(@Body() createExperienciaDispositivoDto: CreateExperienciaDispositivoDto) {
    return this.experienciaDispositivoService.create(createExperienciaDispositivoDto);
  }

  @Get()
  findAll() {
    return this.experienciaDispositivoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.experienciaDispositivoService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateExperienciaDispositivoDto: UpdateExperienciaDispositivoDto) {
    return this.experienciaDispositivoService.update(+id, updateExperienciaDispositivoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.experienciaDispositivoService.remove(+id);
  }
}

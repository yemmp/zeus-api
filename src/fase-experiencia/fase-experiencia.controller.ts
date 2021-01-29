import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { FaseExperienciaService } from './fase-experiencia.service';
import { CreateFaseExperienciaDto } from './dto/create-fase-experiencia.dto';
import { UpdateFaseExperienciaDto } from './dto/update-fase-experiencia.dto';

@Controller('fase-experiencia')
export class FaseExperienciaController {
  constructor(private readonly faseExperienciaService: FaseExperienciaService) {}

  @Post()
  create(@Body() createFaseExperienciaDto: CreateFaseExperienciaDto) {
    return this.faseExperienciaService.create(createFaseExperienciaDto);
  }

  @Get()
  findAll() {
    return this.faseExperienciaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.faseExperienciaService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateFaseExperienciaDto: UpdateFaseExperienciaDto) {
    return this.faseExperienciaService.update(+id, updateFaseExperienciaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.faseExperienciaService.remove(+id);
  }
}

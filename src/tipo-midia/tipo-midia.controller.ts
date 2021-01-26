import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { TipoMidiaService } from './tipo-midia.service';
import { CreateTipoMidiaDto } from './dto/create-tipo-midia.dto';
import { UpdateTipoMidiaDto } from './dto/update-tipo-midia.dto';

@Controller('tipo-midia')
export class TipoMidiaController {
  constructor(private readonly tipoMidiaService: TipoMidiaService) {}

  @Post()
  create(@Body() createTipoMidiaDto: CreateTipoMidiaDto) {
    return this.tipoMidiaService.create(createTipoMidiaDto);
  }

  @Get()
  findAll() {
    return this.tipoMidiaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipoMidiaService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateTipoMidiaDto: UpdateTipoMidiaDto) {
    return this.tipoMidiaService.update(+id, updateTipoMidiaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipoMidiaService.remove(+id);
  }
}

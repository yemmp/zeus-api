import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { TipoFaseService } from './tipo-fase.service';
import { CreateTipoFaseDto } from './dto/create-tipo-fase.dto';
import { UpdateTipoFaseDto } from './dto/update-tipo-fase.dto';

@Controller('tipo-fase')
export class TipoFaseController {
  constructor(private readonly tipoFaseService: TipoFaseService) {}

  @Post()
  create(@Body() createTipoFaseDto: CreateTipoFaseDto) {
    return this.tipoFaseService.create(createTipoFaseDto);
  }

  @Get()
  findAll() {
    return this.tipoFaseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipoFaseService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateTipoFaseDto: UpdateTipoFaseDto) {
    return this.tipoFaseService.update(+id, updateTipoFaseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipoFaseService.remove(+id);
  }
}

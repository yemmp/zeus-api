import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { PontoTrajetoService } from './ponto-trajeto.service';
import { CreatePontoTrajetoDto } from './dto/create-ponto-trajeto.dto';
import { UpdatePontoTrajetoDto } from './dto/update-ponto-trajeto.dto';

@Controller('ponto-trajeto')
export class PontoTrajetoController {
  constructor(private readonly pontoTrajetoService: PontoTrajetoService) {}

  @Post()
  create(@Body() createPontoTrajetoDto: CreatePontoTrajetoDto) {
    return this.pontoTrajetoService.create(createPontoTrajetoDto);
  }

  @Get()
  findAll() {
    return this.pontoTrajetoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pontoTrajetoService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatePontoTrajetoDto: UpdatePontoTrajetoDto) {
    return this.pontoTrajetoService.update(+id, updatePontoTrajetoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pontoTrajetoService.remove(+id);
  }
}

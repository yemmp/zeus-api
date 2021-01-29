import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { AvaliacaoDispositivoService } from './avaliacao-dispositivo.service';
import { CreateAvaliacaoDispositivoDto } from './dto/create-avaliacao-dispositivo.dto';
import { UpdateAvaliacaoDispositivoDto } from './dto/update-avaliacao-dispositivo.dto';

@Controller('avaliacao-dispositivo')
export class AvaliacaoDispositivoController {
  constructor(private readonly avaliacaoDispositivoService: AvaliacaoDispositivoService) {}

  @Post()
  create(@Body() createAvaliacaoDispositivoDto: CreateAvaliacaoDispositivoDto) {
    return this.avaliacaoDispositivoService.create(createAvaliacaoDispositivoDto);
  }

  @Get()
  findAll() {
    return this.avaliacaoDispositivoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.avaliacaoDispositivoService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateAvaliacaoDispositivoDto: UpdateAvaliacaoDispositivoDto) {
    return this.avaliacaoDispositivoService.update(+id, updateAvaliacaoDispositivoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.avaliacaoDispositivoService.remove(+id);
  }
}

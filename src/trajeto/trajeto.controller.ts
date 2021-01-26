import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { TrajetoService } from './trajeto.service';
import { CreateTrajetoDto } from './dto/create-trajeto.dto';
import { UpdateTrajetoDto } from './dto/update-trajeto.dto';

@Controller('trajeto')
export class TrajetoController {
  constructor(private readonly trajetoService: TrajetoService) {}

  @Post()
  create(@Body() createTrajetoDto: CreateTrajetoDto) {
    return this.trajetoService.create(createTrajetoDto);
  }

  @Get()
  findAll() {
    return this.trajetoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.trajetoService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateTrajetoDto: UpdateTrajetoDto) {
    return this.trajetoService.update(+id, updateTrajetoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.trajetoService.remove(+id);
  }
}

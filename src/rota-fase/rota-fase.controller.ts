import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { RotaFaseService } from './rota-fase.service';
import { CreateRotaFaseDto } from './dto/create-rota-fase.dto';
import { UpdateRotaFaseDto } from './dto/update-rota-fase.dto';

@Controller('rota-fase')
export class RotaFaseController {
  constructor(private readonly rotaFaseService: RotaFaseService) {}

  @Post()
  create(@Body() createRotaFaseDto: CreateRotaFaseDto) {
    return this.rotaFaseService.create(createRotaFaseDto);
  }

  @Get()
  findAll() {
    return this.rotaFaseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rotaFaseService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateRotaFaseDto: UpdateRotaFaseDto) {
    return this.rotaFaseService.update(+id, updateRotaFaseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rotaFaseService.remove(+id);
  }
}

import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ConcessionariaService } from './concessionaria.service';
import { CreateConcessionariaDto } from './dto/create-concessionaria.dto';
import { UpdateConcessionariaDto } from './dto/update-concessionaria.dto';

@Controller('concessionaria')
export class ConcessionariaController {
  constructor(private readonly concessionariaService: ConcessionariaService) {}

  @Post()
  create(@Body() createConcessionariaDto: CreateConcessionariaDto) {
    return this.concessionariaService.create(createConcessionariaDto);
  }

  @Get()
  findAll() {
    return this.concessionariaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.concessionariaService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateConcessionariaDto: UpdateConcessionariaDto) {
    return this.concessionariaService.update(+id, updateConcessionariaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.concessionariaService.remove(+id);
  }
}

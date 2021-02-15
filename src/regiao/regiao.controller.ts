import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { RegiaoService } from './regiao.service';
import { CreateRegiaoDto } from './dto/create-regiao.dto';
import { UpdateRegiaoDto } from './dto/update-regiao.dto';

@Controller('regiao')
export class RegiaoController {
  constructor(private readonly regiaoService: RegiaoService) {}

  @Post()
  create(@Body() createRegiaoDto: CreateRegiaoDto) {
    return this.regiaoService.create(createRegiaoDto);
  }

  @Get()
  findAll() {
    return this.regiaoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.regiaoService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateRegiaoDto: UpdateRegiaoDto) {
    return this.regiaoService.update(+id, updateRegiaoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.regiaoService.remove(+id);
  }
}

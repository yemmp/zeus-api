import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { InformacaoService } from './informacao.service';
import { CreateInformacaoDto } from './dto/create-informacao.dto';
import { UpdateInformacaoDto } from './dto/update-informacao.dto';

@Controller('informacao')
export class InformacaoController {
  constructor(private readonly informacaoService: InformacaoService) {}

  @Post()
  create(@Body() createInformacaoDto: CreateInformacaoDto) {
    return this.informacaoService.create(createInformacaoDto);
  }

  @Get()
  findAll() {
    return this.informacaoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.informacaoService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateInformacaoDto: UpdateInformacaoDto) {
    return this.informacaoService.update(+id, updateInformacaoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.informacaoService.remove(+id);
  }
}

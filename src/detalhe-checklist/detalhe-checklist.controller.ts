import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { DetalheChecklistService } from './detalhe-checklist.service';
import { CreateDetalheChecklistDto } from './dto/create-detalhe-checklist.dto';
import { UpdateDetalheChecklistDto } from './dto/update-detalhe-checklist.dto';

@Controller('detalhe-checklist')
export class DetalheChecklistController {
  constructor(private readonly detalheChecklistService: DetalheChecklistService) {}

  @Post()
  create(@Body() createDetalheChecklistDto: CreateDetalheChecklistDto) {
    return this.detalheChecklistService.create(createDetalheChecklistDto);
  }

  @Get()
  findAll() {
    return this.detalheChecklistService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.detalheChecklistService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateDetalheChecklistDto: UpdateDetalheChecklistDto) {
    return this.detalheChecklistService.update(+id, updateDetalheChecklistDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.detalheChecklistService.remove(+id);
  }
}

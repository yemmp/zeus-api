import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { MidiaService } from './midia.service';
import { CreateMidiaDto } from './dto/create-midia.dto';
import { UpdateMidiaDto } from './dto/update-midia.dto';

@Controller('midia')
export class MidiaController {
  constructor(private readonly midiaService: MidiaService) {}

  @Post()
  create(@Body() createMidiaDto: CreateMidiaDto) {
    return this.midiaService.create(createMidiaDto);
  }

  @Get()
  findAll() {
    return this.midiaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.midiaService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateMidiaDto: UpdateMidiaDto) {
    return this.midiaService.update(+id, updateMidiaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.midiaService.remove(+id);
  }
}

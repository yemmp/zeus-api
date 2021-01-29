import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { IconeService } from './icone.service';
import { CreateIconeDto } from './dto/create-icone.dto';
import { UpdateIconeDto } from './dto/update-icone.dto';

@Controller('icone')
export class IconeController {
  constructor(private readonly iconeService: IconeService) {}

  @Post()
  create(@Body() createIconeDto: CreateIconeDto) {
    return this.iconeService.create(createIconeDto);
  }

  @Get()
  findAll() {
    return this.iconeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.iconeService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateIconeDto: UpdateIconeDto) {
    return this.iconeService.update(+id, updateIconeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.iconeService.remove(+id);
  }
}

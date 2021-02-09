import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ExperienciaDispositivoService } from './experiencia-dispositivo.service';
import { CreateExperienciaDispositivoDto } from './dto/create-experiencia-dispositivo.dto';
import { UpdateExperienciaDispositivoDto } from './dto/update-experiencia-dispositivo.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ExperienciaDispositivo } from './entities/experiencia-dispositivo.entity';

@Controller('experiencia-dispositivo')
@ApiTags('experiencia-dispositivo')
export class ExperienciaDispositivoController {
  constructor(private readonly experienciaDispositivoService: ExperienciaDispositivoService) {}

  @ApiOperation({summary:'Criar uma nova experiencia-dispositivo'})
  @ApiResponse({status: 200,description:'Experiencia-dispositivo criada com sucesso.', type: ExperienciaDispositivo})
  @Post()
  create(@Body() createExperienciaDispositivoDto: CreateExperienciaDispositivoDto) {
    return this.experienciaDispositivoService.create(createExperienciaDispositivoDto);
  }

  @ApiOperation({summary:'Listar experiencias-dispositivo'})
  @ApiResponse({status: 200,description:'Ok', type: [ExperienciaDispositivo]})
  @Get()
  findAll() {
    return this.experienciaDispositivoService.findAll();
  }

  @ApiOperation({summary:'Buscar uma experiencia-dispositivo'})
  @ApiResponse({status: 200,description:'Ok', type: ExperienciaDispositivo})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.experienciaDispositivoService.findOne(+id);
  }

  @ApiOperation({summary:'Atualizar uma experiencia-dispositivo'})
  @ApiResponse({status: 200,description:'Experiencia-dispositivo atualizada com sucesso.', type: ExperienciaDispositivo})
  @Put(':id')
  update(@Param('id') id: string, @Body() updateExperienciaDispositivoDto: UpdateExperienciaDispositivoDto) {
    return this.experienciaDispositivoService.update(+id, updateExperienciaDispositivoDto);
  }

  @ApiOperation({summary:'Apagar dados de uma experiencia-dispositivo'})
  @ApiResponse({status: 200,description:'Dados apagados com sucesso.', type: ExperienciaDispositivo})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.experienciaDispositivoService.remove(+id);
  }
}

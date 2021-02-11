import { Controller, Get, Post, Body, Put, Param, Delete, Query } from '@nestjs/common';
import { ExperienciaDispositivoService } from './experiencia-dispositivo.service';
import { CreateExperienciaDispositivoDto } from './dto/create-experiencia-dispositivo.dto';
import { UpdateExperienciaDispositivoDto } from './dto/update-experiencia-dispositivo.dto';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
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
  @ApiQuery({name:'projecao',allowEmptyValue: true,schema:{default:'APP'}})
  @Get()
  findAll(@Query('projecao') projecao:string = 'APP') {
    return this.experienciaDispositivoService.findAll(projecao);
  }
  
  @ApiOperation({summary:'Buscar uma experiencia-dispositivo'})
  @ApiResponse({status: 200,description:'Ok', type: ExperienciaDispositivo})
  @ApiQuery({name:'projecao',allowEmptyValue: true,schema:{default:'APP'}})
  @Get(':id')
  findOne(@Query('projecao') projecao:string = 'APP' ,@Param('id') id: string) {
    return this.experienciaDispositivoService.findOne(projecao,+id);
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

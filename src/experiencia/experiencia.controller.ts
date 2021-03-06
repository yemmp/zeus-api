import { Controller, Get, Post, Body, Put, Param, Delete, Query } from '@nestjs/common';
import { ExperienciaService } from './experiencia.service';
import { CreateExperienciaDto } from './dto/create-experiencia.dto';
import { UpdateExperienciaDto } from './dto/update-experiencia.dto';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Experiencia } from './entities/experiencia.entity';

@Controller('experiencia')
@ApiTags('experiencia')
export class ExperienciaController {
  constructor(private readonly experienciaService: ExperienciaService) {}

  @ApiOperation({summary:'Criar uma nova experiencia'})
  @ApiResponse({status: 200, description:'Experiencia criada com sucesso.' , type: Experiencia})
  @Post()
  create(@Body() createExperienciaDto: CreateExperienciaDto) {
    return this.experienciaService.create(createExperienciaDto);
  }

  @ApiOperation({summary:'Listar experiencias'})
  @ApiResponse({status: 200, description:'Ok' , type: [Experiencia]})
  @Get()
  @ApiQuery({name:'projecao',allowEmptyValue: true, schema:{default:'APP'}})
  findAll(@Query('projecao') projecao:string = 'APP') {
    return this.experienciaService.findAll(projecao);
  }
  
  @ApiOperation({summary:'Buscar uma experiencia'})
  @ApiResponse({status: 200, description:'Ok' , type: Experiencia})
  @Get(':id')
  @ApiQuery({name:'projecao',allowEmptyValue: true, schema:{default:'APP'}})
  findOne(@Query('projecao') projecao:string = 'APP',@Param('id') id: string) {
    return this.experienciaService.findOne(projecao,+id);
  }

  @ApiOperation({summary:'Atualizar uma experiencia'})
  @ApiResponse({status: 200, description:'Experiencia atualizada com sucesso.' , type: Experiencia})
  @Put(':id')
  update(@Param('id') id: string, @Body() updateExperienciaDto: UpdateExperienciaDto) {
    return this.experienciaService.update(+id, updateExperienciaDto);
  }

  @ApiOperation({summary:'Apagar dados de uma experiencia'})
  @ApiResponse({status: 200, description:'Dados apagados com sucesso.' , type: Experiencia})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.experienciaService.remove(+id);
  }
}

import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { FaseExperienciaService } from './fase-experiencia.service';
import { CreateFaseExperienciaDto } from './dto/create-fase-experiencia.dto';
import { UpdateFaseExperienciaDto } from './dto/update-fase-experiencia.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FaseExperiencia } from './entities/fase-experiencia.entity';

@Controller('fase-experiencia')
@ApiTags('fase-experiencia')
export class FaseExperienciaController {
  constructor(private readonly faseExperienciaService: FaseExperienciaService) {}

  @ApiOperation({summary:'Criar uma nova fase-experiencia'})
  @ApiResponse({status: 200,description:'Fase-experiencia criada com sucesso.', type: FaseExperiencia})
  @Post()
  create(@Body() createFaseExperienciaDto: CreateFaseExperienciaDto) {
    return this.faseExperienciaService.create(createFaseExperienciaDto);
  }

  @ApiOperation({summary:'Listar fases-experiencia'})
  @ApiResponse({status: 200,description:'Ok', type: [FaseExperiencia]})
  @Get()
  findAll() {
    return this.faseExperienciaService.findAll();
  }

  @ApiOperation({summary:'Buscar uma fase-experiencia'})
  @ApiResponse({status: 200,description:'Ok', type: FaseExperiencia})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.faseExperienciaService.findOne(+id);
  }

  @ApiOperation({summary:'Atualizar uma fase-experiencia'})
  @ApiResponse({status: 200,description:'Fase-experiencia atualizada com sucesso.', type: FaseExperiencia})
  @Put(':id')
  update(@Param('id') id: string, @Body() updateFaseExperienciaDto: UpdateFaseExperienciaDto) {
    return this.faseExperienciaService.update(+id, updateFaseExperienciaDto);
  }

  @ApiOperation({summary:'Apagar dados de uma fase-experiencia'})
  @ApiResponse({status: 200,description:'Dados apagados com sucesso.', type: FaseExperiencia})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.faseExperienciaService.remove(+id);
  }
}

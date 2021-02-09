import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AvaliacaoDispositivoService } from './avaliacao-dispositivo.service';
import { CreateAvaliacaoDispositivoDto } from './dto/create-avaliacao-dispositivo.dto';
import { UpdateAvaliacaoDispositivoDto } from './dto/update-avaliacao-dispositivo.dto';
import { AvaliacaoDispositivo } from './entities/avaliacao-dispositivo.entity';

@Controller('avaliacao-dispositivo')
@ApiTags('avaliacao-dispositivo')
export class AvaliacaoDispositivoController {
  constructor(private readonly avaliacaoDispositivoService: AvaliacaoDispositivoService) {}

  @ApiOperation({summary:'Criar uma nova avaliação-dispositivo.'})
  @ApiResponse({status: 200,description:'Avaliacao-dispositivo criada com sucesso.', type:AvaliacaoDispositivo})
  @Post()
  create(@Body() createAvaliacaoDispositivoDto: CreateAvaliacaoDispositivoDto) {
    return this.avaliacaoDispositivoService.create(createAvaliacaoDispositivoDto);
  }

  @ApiOperation({summary:'Listar avaliações-dispositivo.'})
  @ApiResponse({status: 200,description:'Ok', type:[AvaliacaoDispositivo]})
  @Get()
  findAll() {
    return this.avaliacaoDispositivoService.findAll();
  }

  @ApiOperation({summary:'Buscar uma avaliação-dispositivo.'})
  @ApiResponse({status: 200,description:'Ok', type:AvaliacaoDispositivo})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.avaliacaoDispositivoService.findOne(+id);
  }

  @ApiOperation({summary:'Atualizar uma avaliação-dispositivo.'})
  @ApiResponse({status: 200,description:'Avaliacao-dispositivo atualizada com sucesso.', type:AvaliacaoDispositivo})
  @Put(':id')
  update(@Param('id') id: string, @Body() updateAvaliacaoDispositivoDto: UpdateAvaliacaoDispositivoDto) {
    return this.avaliacaoDispositivoService.update(+id, updateAvaliacaoDispositivoDto);
  }

  @ApiOperation({summary:'Apagar dados de uma avaliacao-dispositivo.'})
  @ApiResponse({status: 200,description:'Dados apagados com sucesso.', type:AvaliacaoDispositivo})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.avaliacaoDispositivoService.remove(+id);
  }
}

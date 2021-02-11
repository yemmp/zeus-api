import { Controller, Get, Post, Body, Put, Param, Delete, Query } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
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
  @ApiQuery({name:'projecao',allowEmptyValue:true,schema:{default:'APP'}})
  @Get()
  findAll(@Query('projecao') projecao:string='APP') {
    return this.avaliacaoDispositivoService.findAll(projecao);
  }
  
  @ApiOperation({summary:'Buscar uma avaliação-dispositivo.'})
  @ApiResponse({status: 200,description:'Ok', type:AvaliacaoDispositivo})
  @ApiQuery({name:'projecao',allowEmptyValue:true,schema:{default:'APP'}})
  @Get(':id')
  findOne(@Query('projecao') projecao:string = 'APP',@Param('id') id: string) {
    return this.avaliacaoDispositivoService.findOne(projecao,+id);
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

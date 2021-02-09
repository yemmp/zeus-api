import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { PontoTrajetoService } from './ponto-trajeto.service';
import { CreatePontoTrajetoDto } from './dto/create-ponto-trajeto.dto';
import { UpdatePontoTrajetoDto } from './dto/update-ponto-trajeto.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PontoTrajeto } from './entities/ponto-trajeto.entity';

@Controller('ponto-trajeto')
@ApiTags('ponto-trajeto')
export class PontoTrajetoController {
  constructor(private readonly pontoTrajetoService: PontoTrajetoService) {}

  @ApiOperation({summary:'Criar um novo ponto-trajeto'})
  @ApiResponse({status: 200,description:'Ponto-trajeto criado com sucesso.',type: PontoTrajeto})
  @Post()
  create(@Body() createPontoTrajetoDto: CreatePontoTrajetoDto) {
    return this.pontoTrajetoService.create(createPontoTrajetoDto);
  }

  @ApiOperation({summary:'Listar pontos-trajeto'})
  @ApiResponse({status: 200,description:'Ok',type: [PontoTrajeto]})
  @Get()
  findAll() {
    return this.pontoTrajetoService.findAll();
  }

  @ApiOperation({summary:'Buscar um ponto-trajeto'})
  @ApiResponse({status: 200,description:'Ok',type: PontoTrajeto})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pontoTrajetoService.findOne(+id);
  }

  @ApiOperation({summary:'Atualizar um ponto-trajeto'})
  @ApiResponse({status: 200,description:'Ponto-trajeto atualizado com sucesso.',type: PontoTrajeto})
  @Put(':id')
  update(@Param('id') id: string, @Body() updatePontoTrajetoDto: UpdatePontoTrajetoDto) {
    return this.pontoTrajetoService.update(+id, updatePontoTrajetoDto);
  }

  @ApiOperation({summary:'Apagar dados de um ponto-trajeto'})
  @ApiResponse({status: 200,description:'Dados apagados com sucesso.',type: PontoTrajeto})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pontoTrajetoService.remove(+id);
  }
}

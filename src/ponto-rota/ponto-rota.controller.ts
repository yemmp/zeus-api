import { Controller, Get, Post, Body, Put, Param, Delete, Query } from '@nestjs/common';
import { PontoRotaService } from './ponto-rota.service';
import { CreatePontoRotaDto } from './dto/create-ponto-rota.dto';
import { UpdatePontoRotaDto } from './dto/update-ponto-rota.dto';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PontoRota } from './entities/ponto-rota.entity';

@Controller('ponto-rota')
@ApiTags('ponto-rota')
export class PontoRotaController {
  constructor(private readonly pontoRotaService: PontoRotaService) {}

  @ApiOperation({summary:'Criar um novo ponto-rota'})
  @ApiResponse({status: 200,description:'Ponto-rota criado com sucesso.', type: PontoRota})
  @Post()
  create(@Body() createPontoRotaDto: CreatePontoRotaDto) {
    return this.pontoRotaService.create(createPontoRotaDto);
  }

  @ApiOperation({summary:'Criar uma lista de ponto-rota'})
  @ApiResponse({status: 200,description:'Ponto-rota criado com sucesso.',type: PontoRota})
  @Post("_bulk")
  bulkCreate(@Body() createPontoTrajetoDto: [CreatePontoRotaDto]) {
    return this.pontoRotaService.bulkCreate(createPontoTrajetoDto);
  }

  @ApiOperation({summary:'Listar pontos-rota'})
  @ApiResponse({status: 200,description:'Ok', type: [PontoRota]})
  @ApiQuery({name:'projecao',allowEmptyValue: true, schema:{default: 'APP'}})
  @Get()
  findAll(@Query('projecao') projecao:string = 'APP') {
    return this.pontoRotaService.findAll(projecao);
  }
  
  @ApiOperation({summary:'ponto-rota'})
  @ApiResponse({status: 200,description:'', type: PontoRota})
  @ApiQuery({name:'projecao',allowEmptyValue: true, schema:{default: 'APP'}})
  @Get(':id')
  findOne(@Query('projecao') projecao:string ='APP',@Param('id') id: string) {
    return this.pontoRotaService.findOne(projecao,+id);
  }

  @ApiOperation({summary:'ponto-rota'})
  @ApiResponse({status: 200,description:'', type: PontoRota})
  @Put(':id')
  update(@Param('id') id: string, @Body() updatePontoRotaDto: UpdatePontoRotaDto) {
    return this.pontoRotaService.update(+id, updatePontoRotaDto);
  }

  @ApiOperation({summary:'ponto-rota'})
  @ApiResponse({status: 200,description:'', type: PontoRota})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pontoRotaService.remove(+id);
  }

  @ApiOperation({summary:'Apagar todos os ponto-rotas associados a um rota'})
  @ApiResponse({status: 200,description:'Dados apagados com sucesso.',type: PontoRota})
  @Delete('rota/:id')
  removeByCodTrajeto(@Param('id') id: string) {
    return this.pontoRotaService.removeByCodRota(+id);
  }
}

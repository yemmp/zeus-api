import { Controller, Get, Post, Body, Put, Param, Delete, Query } from '@nestjs/common';
import { PontoTrajetoService } from './ponto-trajeto.service';
import { CreatePontoTrajetoDto } from './dto/create-ponto-trajeto.dto';
import { UpdatePontoTrajetoDto } from './dto/update-ponto-trajeto.dto';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
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

  @ApiOperation({summary:'Criar uma lista de ponto-trajeto'})
  @ApiResponse({status: 200,description:'Ponto-trajeto criado com sucesso.',type: PontoTrajeto})
  @Post("_bulk")
  bulkCreate(@Body() createPontoTrajetoDto: [CreatePontoTrajetoDto]) {
    return this.pontoTrajetoService.bulkCreate(createPontoTrajetoDto);
  }

  @ApiOperation({summary:'Listar pontos-trajeto'})
  @ApiResponse({status: 200,description:'Ok',type: [PontoTrajeto]})
  @ApiQuery({name:'projecao',allowEmptyValue:true,schema:{default:'APP'}})
  @Get()
  findAll(@Query('projecao') projecao:string = 'APP') {
    return this.pontoTrajetoService.findAll(projecao);
  }
  
  @ApiOperation({summary:'Buscar um ponto-trajeto'})
  @ApiResponse({status: 200,description:'Ok',type: PontoTrajeto})
  @ApiQuery({name:'projecao',allowEmptyValue:true,schema:{default:'APP'}})
  @Get(':id')
  findOne(@Query('projecao') projecao:string = 'APP',@Param('id') id: string) {
    return this.pontoTrajetoService.findOne(projecao,+id);
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

  @ApiOperation({summary:'Apagar todos os ponto-trajetos associados a um trajeto'})
  @ApiResponse({status: 200,description:'Dados apagados com sucesso.',type: PontoTrajeto})
  @Delete('trajeto/:id')
  removeByCodTrajeto(@Param('id') id: string) {
    return this.pontoTrajetoService.removeByCodTrajeto(+id);
  }
}

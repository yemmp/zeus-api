import { Controller, Get, Post, Body, Put, Param, Delete, Query } from '@nestjs/common';
import { InformacaoService } from './informacao.service';
import { CreateInformacaoDto } from './dto/create-informacao.dto';
import { UpdateInformacaoDto } from './dto/update-informacao.dto';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Informacao } from './entities/informacao.entity';

@Controller('informacao')
@ApiTags('informacao')
export class InformacaoController {
  constructor(private readonly informacaoService: InformacaoService) {}

  @ApiOperation({summary:'Criar uma nova informação'})
  @ApiResponse({status: 200,description:'Informação criada com sucesso.', type: Informacao})
  @Post()
  create(@Body() createInformacaoDto: CreateInformacaoDto) {
    return this.informacaoService.create(createInformacaoDto);
  }

  @ApiOperation({summary:'Listar informações'})
  @ApiResponse({status: 200,description:'Ok', type: [Informacao]})
  @Get()
  @ApiQuery({name:'projecao',allowEmptyValue:true,schema:{default:'APP'}})
  findAll(@Query('projecao') projecao:string = 'APP') {
    return this.informacaoService.findAll(projecao);
  }
  
  @ApiOperation({summary:'Buscar uma informação'})
  @ApiResponse({status: 200,description:'Ok', type: Informacao})
  @ApiQuery({name:'projecao',allowEmptyValue:true,schema:{default:'APP'}})
  @Get(':id')
  findOne(@Query('projecao') projecao:string = 'APP',@Param('id') id: string) {
    return this.informacaoService.findOne(projecao,+id);
  }

  @ApiOperation({summary:'Atualizar uma informação'})
  @ApiResponse({status: 200,description:'Informação atualizada com sucesso.', type: Informacao})
  @Put(':id')
  update(@Param('id') id: string, @Body() updateInformacaoDto: UpdateInformacaoDto) {
    return this.informacaoService.update(+id, updateInformacaoDto);
  }

  @ApiOperation({summary:'Apagar dados de uma informação'})
  @ApiResponse({status: 200,description:'Dados apagados com sucesso.', type: Informacao})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.informacaoService.remove(+id);
  }
}

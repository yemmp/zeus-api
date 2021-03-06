import { Controller, Get, Post, Body, Put, Param, Delete, Query } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { DetalheChecklistService } from './detalhe-checklist.service';
import { CreateDetalheChecklistDto } from './dto/create-detalhe-checklist.dto';
import { UpdateDetalheChecklistDto } from './dto/update-detalhe-checklist.dto';
import { DetalheChecklist } from './entities/detalhe-checklist.entity';

@Controller('detalhe-checklist')
@ApiTags('detalhe-checklist')
export class DetalheChecklistController {
  constructor(private readonly detalheChecklistService: DetalheChecklistService) { }
  @ApiOperation({ summary: 'Criar um novo detalhe-checklist' })
  @ApiResponse({ status: 200, description: 'Detalhe-checklist criado com sucesso.', type: DetalheChecklist })
  @Post()
  create(@Body() createDetalheChecklistDto: CreateDetalheChecklistDto) {
    return this.detalheChecklistService.create(createDetalheChecklistDto);
  }

  @ApiOperation({summary:'Criar uma lista de ponto-trajeto'})
  @ApiResponse({status: 200,description:'Ponto-trajeto criado com sucesso.',type: DetalheChecklist})
  @Post("_bulk")
  bulkCreate(@Body() dto: [CreateDetalheChecklistDto]) {
    return this.detalheChecklistService.bulkCreate(dto);
  }

  @ApiOperation({ summary: 'Listar detalhes-checklist' })
  @ApiResponse({ status: 200, description: 'Ok', type: [DetalheChecklist] })
  @ApiQuery({ name: 'projecao', allowEmptyValue: true, schema: { default: 'APP' } })
  @Get()
  findAll(@Query('projecao') projecao: string = 'APP') {
    return this.detalheChecklistService.findAll(projecao);
  }
  @ApiOperation({ summary: 'Buscar um detalhe-checklist' })
  @ApiResponse({ status: 200, description: 'Ok', type: DetalheChecklist })
  @ApiQuery({ name: 'projecao', allowEmptyValue: true, schema: { default: 'APP' } })
  @Get(':id')
  findOne(@Query('projecao') projecao: string = 'APP', @Param('id') id: string) {
    return this.detalheChecklistService.findOne(projecao, +id);
  }
  @ApiOperation({ summary: 'Atualizar um detalhe-checklist' })
  @ApiResponse({ status: 200, description: 'Detalhe-checklist atualizado com sucesso.', type: DetalheChecklist })
  @Put(':id')
  update(@Param('id') id: string, @Body() updateDetalheChecklistDto: UpdateDetalheChecklistDto) {
    return this.detalheChecklistService.update(+id, updateDetalheChecklistDto);
  }
  @ApiOperation({ summary: 'Apagar dados de um detalhe-checklist' })
  @ApiResponse({ status: 200, description: 'Dados apagados com sucesso.', type: DetalheChecklist })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.detalheChecklistService.remove(+id);
  }

  @ApiOperation({summary:'Apagar todos os ponto-trajetos associados a um trajeto'})
  @ApiResponse({status: 200,description:'Dados apagados com sucesso.'})
  @Delete('checklist/:id')
  bulkRemove(@Param('id') id: string) {
    return this.detalheChecklistService.removeByCodChecklist(+id);
  }
}

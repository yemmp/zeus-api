import { Controller, Get, Post, Body, Put, Param, Delete, Query } from '@nestjs/common';
import { FormularioService } from './formulario.service';
import { CreateFormularioDto } from './dto/create-formulario.dto';
import { UpdateFormularioDto } from './dto/update-formulario.dto';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Formulario } from './entities/formulario.entity';
import { QueryFormularioDTO } from './dto/query-formulario.dto';

@Controller('formulario')
@ApiTags('formulario')
export class FormularioController {
  constructor(private readonly formularioService: FormularioService) { }

  @ApiOperation({ summary: 'Criar um novo formulario' })
  @ApiResponse({ status: 200, description: 'Formulario criado com sucesso.', type: Formulario })
  @Post()
  create(@Body() createFormularioDto: CreateFormularioDto) {
    return this.formularioService.create(createFormularioDto);
  }

  @ApiOperation({ summary: 'Listar formularios' })
  @ApiResponse({ status: 200, description: 'Ok', type: [Formulario] })
  @ApiQuery({ name: 'projecao', allowEmptyValue: true, schema: { default: 'APP' } })
  @Get()
  findAll(@Query('projecao') projecao: string = 'APP') {
    return this.formularioService.findAll(projecao);
  }

  @ApiOperation({ summary: 'Buscar um formulario' })
  @ApiResponse({ status: 200, description: 'Ok', type: Formulario })
  @ApiQuery({ name: 'projecao', allowEmptyValue: true, schema: { default: 'APP' } })
  @Get(':id')
  findOne(@Query('projecao') projecao: string = 'APP', @Param('id') id: string) {
    return this.formularioService.findOne(projecao, +id);
  }

 
  @ApiQuery({ name: 'projecao', allowEmptyValue: true, schema: { default: 'APP' } })
  @ApiQuery({ name: 'cpf', allowEmptyValue: false})
  @ApiQuery({ name: 'datNascimento', allowEmptyValue: false })
  @Get()
  findByQuery(@Query('projecao')  projecao: string = 'APP',@Query('cpf') numCpf: string,@Query('datNascimento')datNascimento: string) {
    return this.formularioService.findByQuery(projecao,numCpf,datNascimento);
  }

  @ApiOperation({ summary: 'Atualizar um formulario' })
  @ApiResponse({ status: 200, description: 'Formulario atualizado com sucesso.', type: Formulario })
  @Put(':id')
  update(@Param('id') id: string, @Body() updateFormularioDto: UpdateFormularioDto) {
    return this.formularioService.update(+id, updateFormularioDto);
  }

  @ApiOperation({ summary: 'Apagar dados de um formulario' })
  @ApiResponse({ status: 200, description: 'Dados apagados com sucesso.', type: Formulario })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.formularioService.remove(+id);
  }
}

import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { FormularioService } from './formulario.service';
import { CreateFormularioDto } from './dto/create-formulario.dto';
import { UpdateFormularioDto } from './dto/update-formulario.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Formulario } from './entities/formulario.entity';

@Controller('formulario')
@ApiTags('formulario')
export class FormularioController {
  constructor(private readonly formularioService: FormularioService) {}

  @ApiOperation({summary:'Criar um novo formulario'})
  @ApiResponse({status: 200,description:'Formulario criado com sucesso.', type: Formulario})
  @Post()
  create(@Body() createFormularioDto: CreateFormularioDto) {
    return this.formularioService.create(createFormularioDto);
  }

  @ApiOperation({summary:'Listar formularios'})
  @ApiResponse({status: 200,description:'Ok', type: [Formulario]})
  @Get()
  findAll() {
    return this.formularioService.findAll();
  }

  @ApiOperation({summary:'Buscar um formulario'})
  @ApiResponse({status: 200,description:'Ok', type: Formulario})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.formularioService.findOne(+id);
  }

  @ApiOperation({summary:'Atualizar um formulario'})
  @ApiResponse({status: 200,description:'Formulario atualizado com sucesso.', type: Formulario})
  @Put(':id')
  update(@Param('id') id: string, @Body() updateFormularioDto: UpdateFormularioDto) {
    return this.formularioService.update(+id, updateFormularioDto);
  }

  @ApiOperation({summary:'Apagar dados de um formulario'})
  @ApiResponse({status: 200,description:'Dados apagados com sucesso.', type: Formulario})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.formularioService.remove(+id);
  }
}

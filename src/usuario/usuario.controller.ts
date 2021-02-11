import { Controller, Get, Post, Body, Put, Param, Delete, Query } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Usuario } from './entities/usuario.entity';

@Controller('usuario')
@ApiTags('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @ApiOperation({ summary: 'Criar um novo usuário' })
  @ApiResponse({ status: 200, description: 'Usuário criado com sucesso.', type: Usuario })
  @Post()
  async create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuarioService.create(createUsuarioDto);
  }

  @ApiOperation({ summary: 'Listar usuários' })
  @ApiResponse({ status: 200, description: 'Ok', type: [Usuario] })
  @ApiQuery({name:'projecao',allowEmptyValue:true,schema:{default:'APP'}})
  @Get()
  async findAll(@Query('projecao') projecao:string= 'APP') {
    return this.usuarioService.findAll(projecao);
  }
  
  
  @ApiOperation({summary: 'Buscar um usuario'})
  @ApiResponse({status: 200, description: 'Ok', type: Usuario})
  @Get(':id')
  @ApiQuery({name:'projecao',allowEmptyValue:true,schema:{default:'APP'}})
  findOne(@Query('projecao') projecao:string ='APP',@Param('id') id: string) {
    return this.usuarioService.findOne(projecao, +id);
  }

  @ApiOperation({summary: 'Atualizar dados de um usuário'})
  @ApiResponse({status: 200,description: 'Usuario atualizado com sucesso.', type: Usuario})
  @Put(':id')
  update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioService.update(+id, updateUsuarioDto);
  }

  @ApiOperation({summary:'Apagar dados de um usuário'})
  @ApiResponse({status: 200, description: 'Dados apagados com sucesso.', type: Usuario})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuarioService.remove(+id);
  }
}

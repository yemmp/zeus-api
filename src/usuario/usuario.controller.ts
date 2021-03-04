import { Controller, Get, Post, Body, Put, Param, Delete, Query, ClassSerializerInterceptor, UseInterceptors, PipeTransform, ArgumentMetadata, UseGuards, Req } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { ApiBearerAuth, ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Usuario } from './entities/usuario.entity';
import { QueryUsuarioDTO } from './dto/query-usuario.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

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

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Listar usuários' })
  @ApiResponse({ status: 200, description: 'Ok', type: [Usuario] })
  @ApiQuery({name:'projecao',allowEmptyValue:true,schema:{default:'APP'}})
  @Get()
  async findAll(@Query() usuarioQuery: QueryUsuarioDTO, @Req() req) {
    return this.usuarioService.findAll(usuarioQuery);
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

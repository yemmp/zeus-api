import { Controller, Get, Post, Body, Put, Param, Delete, Query } from '@nestjs/common';
import { SessaoService } from './sessao.service';
import { CreateSessaoDto } from './dto/create-sessao.dto';
import { UpdateSessaoDto } from './dto/update-sessao.dto';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Sessao } from './entities/sessao.entity';

@Controller('sessao')
@ApiTags('sessao')
export class SessaoController {
  constructor(private readonly sessaoService: SessaoService) {}

  @ApiOperation({summary:'Criar uma nova sessão'})
  @ApiResponse({status: 200, description:'Sessão criada com sucesso.', type: Sessao})
  @Post()
  create(@Body() createSessaoDto: CreateSessaoDto) {
    return this.sessaoService.create(createSessaoDto);
  }

  @ApiOperation({summary:'Listar sessões'})
  @ApiResponse({status: 200, description:'Ok', type: [Sessao]})
  @ApiQuery({name:'projecao',allowEmptyValue:true, schema:{default:'APP'}})
  @Get()
  findAll(@Query('projecao') projecao:string = 'APP') {
    return this.sessaoService.findAll(projecao);
  }
  
  @ApiOperation({summary:'Buscar uma sessão'})
  @ApiResponse({status: 200, description:'Ok', type: Sessao})
  @ApiQuery({name:'projecao',allowEmptyValue:true, schema:{default:'APP'}})
  @Get(':id')
  findOne(@Query('projecao') projecao:string = 'APP',@Param('id') id: string) {
    return this.sessaoService.findOne(projecao,+id);
  }

  @ApiOperation({summary:'Atualizar uma sessão'})
  @ApiResponse({status: 200, description:'Sessão atualizada com sucesso.', type: Sessao})
  @Put(':id')
  update(@Param('id') id: string, @Body() updateSessaoDto: UpdateSessaoDto) {
    return this.sessaoService.update(+id, updateSessaoDto);
  }

  @ApiOperation({summary:'Apagar dados de uma sessão.'})
  @ApiResponse({status: 200, description:'Dados apagados com sucesso.', type: Sessao})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sessaoService.remove(+id);
  }
}

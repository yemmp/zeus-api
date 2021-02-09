import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { TrajetoService } from './trajeto.service';
import { CreateTrajetoDto } from './dto/create-trajeto.dto';
import { UpdateTrajetoDto } from './dto/update-trajeto.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Trajeto } from './entities/trajeto.entity';

@Controller('trajeto')
@ApiTags('trajeto')
export class TrajetoController {
  constructor(private readonly trajetoService: TrajetoService) {}

  @ApiOperation({summary:'Criar um novo trajeto'})
  @ApiResponse({status: 200,description:'Trajeto criado com sucesso.', type:Trajeto})
  @Post()
  create(@Body() createTrajetoDto: CreateTrajetoDto) {
    return this.trajetoService.create(createTrajetoDto);
  }

  @ApiOperation({summary:'Listar trajetos'})
  @ApiResponse({status: 200,description:'Ok', type:[Trajeto]})
  @Get()
  findAll() {
    return this.trajetoService.findAll();
  }

  @ApiOperation({summary:'Buscar um trajeto'})
  @ApiResponse({status: 200,description:'Ok', type:Trajeto})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.trajetoService.findOne(+id);
  }

  @ApiOperation({summary:'Atualizar um trajeto'})
  @ApiResponse({status: 200,description:'Trajeto atualizado com sucesso.', type:Trajeto})
  @Put(':id')
  update(@Param('id') id: string, @Body() updateTrajetoDto: UpdateTrajetoDto) {
    return this.trajetoService.update(+id, updateTrajetoDto);
  }

  @ApiOperation({summary:'Apagar dados de um trajeto'})
  @ApiResponse({status: 200,description:'Dados apagados com sucesso.', type:Trajeto})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.trajetoService.remove(+id);
  }
}

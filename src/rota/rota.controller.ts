import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { RotaService } from './rota.service';
import { CreateRotaDto } from './dto/create-rota.dto';
import { UpdateRotaDto } from './dto/update-rota.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Rota } from './entities/rota.entity';

@Controller('rota')
@ApiTags('rota')
export class RotaController {
  constructor(private readonly rotaService: RotaService) {}

  @ApiOperation({summary:'Criar uma nova rota'})
  @ApiResponse({status:200, description:'Rota criada com sucesso', type:Rota})
  @Post()
  create(@Body() createRotaDto: CreateRotaDto) {
    return this.rotaService.create(createRotaDto);
  }

  @ApiOperation({summary:'Listar rotas'})
  @ApiResponse({status:200, description:'Ok', type:[Rota]})
  @Get()
  findAll() {
    return this.rotaService.findAll();
  }

  @ApiOperation({summary:'Buscar uma rota'})
  @ApiResponse({status:200, description:'Ok', type:Rota})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rotaService.findOne(+id);
  }

  @ApiOperation({summary:'Atualizar uma rota'})
  @ApiResponse({status:200, description:'Rota atualizada com sucesso.', type:Rota})
  @Put(':id')
  update(@Param('id') id: string, @Body() updateRotaDto: UpdateRotaDto) {
    return this.rotaService.update(+id, updateRotaDto);
  }

  @ApiOperation({summary:'Apagar dados de uma rota'})
  @ApiResponse({status:200, description:'Dados apagados com sucesso.', type:Rota})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rotaService.remove(+id);
  }
}

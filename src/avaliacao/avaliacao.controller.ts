import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AvaliacaoService } from './avaliacao.service';
import { CreateAvaliacaoDto } from './dto/create-avaliacao.dto';
import { UpdateAvaliacaoDto } from './dto/update-avaliacao.dto';
import { Avaliacao } from './entities/avaliacao.entity';

@Controller('avaliacao')
@ApiTags('avaliacao')
export class AvaliacaoController {
  constructor(private readonly avaliacaoService: AvaliacaoService) {}

  @ApiOperation({summary:'Criar uma nova avaliação'})
  @ApiResponse({status: 200,description:'Avaliação criada com sucesso.',type: Avaliacao})
  @Post()
  create(@Body() createAvaliacaoDto: CreateAvaliacaoDto) {
    return this.avaliacaoService.create(createAvaliacaoDto);
  }

  @ApiOperation({summary:'Listar avaliações'})
  @ApiResponse({status: 200,description:'Ok.',type: [Avaliacao]})
  @Get()
  findAll() {
    return this.avaliacaoService.findAll();
  }

  @ApiOperation({summary:'Buscar uma avaliação'})
  @ApiResponse({status: 200,description:'Ok.',type: Avaliacao})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.avaliacaoService.findOne(+id);
  }

  @ApiOperation({summary:'Atualizar uma  avaliação'})
  @ApiResponse({status: 200,description:'Avaliação atualizada com sucesso.',type: Avaliacao})
  @Put(':id')
  update(@Param('id') id: string, @Body() updateAvaliacaoDto: UpdateAvaliacaoDto) {
    return this.avaliacaoService.update(+id, updateAvaliacaoDto);
  }

  @ApiOperation({summary:'Apagar dados de uma avaliação'})
  @ApiResponse({status: 200,description:'Dados apagados com sucesso.',type: Avaliacao})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.avaliacaoService.remove(+id);
  }
}

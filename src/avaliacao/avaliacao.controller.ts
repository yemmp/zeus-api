import { Controller, Get, Post, Body, Put, Param, Delete, Query } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
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
  @ApiQuery({name:'projecao',allowEmptyValue:true,schema:{default:'APP'}})
  @Get()
  findAll(@Query('projecao') projecao:string = 'APP') {
    return this.avaliacaoService.findAll(projecao);
  }
  
  @ApiOperation({summary:'Buscar uma avaliação'})
  @ApiResponse({status: 200,description:'Ok.',type: Avaliacao})
  @ApiQuery({name:'projecao',allowEmptyValue:true,schema:{default:'APP'}})
  @Get(':id')
  findOne(@Query('projecao') projecao:string = 'APP',@Param('id') id: string) {
    return this.avaliacaoService.findOne(projecao,+id);
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

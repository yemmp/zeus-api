import { Controller, Get, Post, Body, Put, Param, Delete, Query } from '@nestjs/common';
import { IconeService } from './icone.service';
import { CreateIconeDto } from './dto/create-icone.dto';
import { UpdateIconeDto } from './dto/update-icone.dto';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Icone } from './entities/icone.entity';

@Controller('icone')
@ApiTags('icone')
export class IconeController {
  constructor(private readonly iconeService: IconeService) {}

  @ApiOperation({summary:'Criar um novo icone'})
  @ApiResponse({status: 200,description:'Icone criado com sucesso.', type: Icone})
  @Post()
  create(@Body() createIconeDto: CreateIconeDto) {
    return this.iconeService.create(createIconeDto);
  }

  @ApiOperation({summary:'Listar icones'})
  @ApiResponse({status: 200,description:'Ok', type: [Icone]})
  @ApiQuery({name:'projecao', allowEmptyValue: true, schema:{ default: 'APP'}})
  @Get()
  findAll(@Query('projecao') projecao:string = 'APP') {
    return this.iconeService.findAll(projecao);
  }
  
  @ApiOperation({summary:'Buscar um icone'})
  @ApiResponse({status: 200,description:'Ok', type: Icone})
  @ApiQuery({name:'projecao', allowEmptyValue: true, schema:{ default: 'APP'}})
  @Get(':id')
  findOne(@Query('projecao')projecao:string = 'APP',@Param('id') id: string) {
    return this.iconeService.findOne(projecao,+id);
  }

  @ApiOperation({summary:'Atualizar um icone'})
  @ApiResponse({status: 200,description:'Icone atualizado com sucesso.', type: Icone})
  @Put(':id')
  update(@Param('id') id: string, @Body() updateIconeDto: UpdateIconeDto) {
    return this.iconeService.update(+id, updateIconeDto);
  }

  @ApiOperation({summary:'Apagar dados de um icone'})
  @ApiResponse({status: 200,description:'Dados apagados com sucesso.', type: Icone})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.iconeService.remove(+id);
  }
}

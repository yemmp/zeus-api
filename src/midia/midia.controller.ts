import { Controller, Get, Post, Body, Put, Param, Delete, UseInterceptors, ClassSerializerInterceptor, Query } from '@nestjs/common';
import { MidiaService } from './midia.service';
import { CreateMidiaDto } from './dto/create-midia.dto';
import { UpdateMidiaDto } from './dto/update-midia.dto';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Midia } from './entities/midia.entity';


@Controller('midia')
@ApiTags('midia')
export class MidiaController {
  constructor(private readonly midiaService: MidiaService) {}

  @ApiOperation({summary:'Criar uma nova midia'})
  @ApiResponse({status: 200,description:'Midia criada com sucesso.', type: Midia})
  @Post()
  create(@Body() createMidiaDto: CreateMidiaDto) {
    return this.midiaService.create(createMidiaDto);
  }

  @ApiOperation({summary:'Listar midias'})
  @ApiResponse({status: 200,description:'Ok', type: [Midia]})
  @ApiQuery({name:'projecao', allowEmptyValue: true, schema:{default: 'APP'}})
  @Get()
  findAll(@Query('projecao') projecao:string = 'APP') {
    return this.midiaService.findAll(projecao);
  }
  
  @ApiOperation({summary:'Buscar uma midia'})
  @ApiResponse({status: 200,description:'Ok', type: Midia})
  @ApiQuery({name:'projecao', allowEmptyValue: true, schema:{default: 'APP'}})
  @Get(':id')
  findOne(@Query('projecao')projecao:string = 'APP',@Param('id') id: string) {
    return this.midiaService.findOne(projecao,+id);
  }

  @ApiOperation({summary:'Atualizar uma midia'})
  @ApiResponse({status: 200,description:'Midia atualizada com sucesso.', type: Midia})
  @Put(':id')
  update(@Param('id') id: string, @Body() updateMidiaDto: UpdateMidiaDto) {
    return this.midiaService.update(+id, updateMidiaDto);
  }

  @ApiOperation({summary:'Apagar dados de uma midia'})
  @ApiResponse({status: 200,description:'Dados apagados com sucesso.', type: Midia})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.midiaService.remove(+id);
  }
}

import { Controller, Get, Post, Body, Put, Param, Delete, Query } from '@nestjs/common';
import { ConcessionariaService } from './concessionaria.service';
import { CreateConcessionariaDto } from './dto/create-concessionaria.dto';
import { UpdateConcessionariaDto } from './dto/update-concessionaria.dto';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiBody,
  ApiResponse,
  ApiTags,
  ApiQuery,
} from '@nestjs/swagger';
import { Concessionaria } from './entities/concessionaria.entity';

@Controller('concessionaria')
@ApiTags('concessionaria')
export class ConcessionariaController {
  constructor(private readonly concessionariaService: ConcessionariaService) {}

  @ApiOperation({summary:'Criar uma nova concessionaria'})
  @ApiResponse({status: 200, description:'Concessionaria criada com sucesso.', type: Concessionaria})
  @Post()
  @ApiBody({type: CreateConcessionariaDto})
  create(@Body() createConcessionariaDto: CreateConcessionariaDto) {
    return this.concessionariaService.create(createConcessionariaDto);
  }

  @ApiOperation({summary:'Listar concessionarias'})
  @ApiResponse({status: 200, description:'Ok', type: [Concessionaria]})
  @ApiQuery({name:'projecao',allowEmptyValue:true,schema:{default:'APP'}})
  @Get()
  findAll(@Query('projecao') projecao:string = 'APP') {
    return this.concessionariaService.findAll(projecao);
  }
  
  @ApiOperation({summary:'Buscar uma concessionaria'})
  @ApiResponse({status: 200, description:'Ok', type: Concessionaria})
  @ApiQuery({name:'projecao',allowEmptyValue:true,schema:{default:'APP'}})
  @Get(':id')
  findOne(@Query('project') projecao: string = 'APP',@Param('id') id: number) {
    return this.concessionariaService.findOne(projecao,+id);
  }

  @ApiOperation({summary:'Atualizar uma concessionaria'})
  @ApiResponse({status: 200, description:'Concessionaria atualizada com sucesso.', type: Concessionaria})
  @Put(':id')
  update(@Param('id') id: number, @Body() updateConcessionariaDto: UpdateConcessionariaDto) {
    return this.concessionariaService.update(+id, updateConcessionariaDto);
  }

  @ApiOperation({summary:'Apagar dados de uma concessionaria'})
  @ApiResponse({status: 200, description:'Dados apagados com sucesso.', type: Concessionaria})
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.concessionariaService.remove(+id);
  }
}

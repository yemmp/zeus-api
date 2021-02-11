import { Controller, Get, Post, Body, Put, Param, Delete, Query } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AtividadeService } from './atividade.service';
import { CreateAtividadeDto } from './dto/create-atividade.dto';
import { UpdateAtividadeDto } from './dto/update-atividade.dto';
import { Atividade } from './entities/atividade.entity';

@Controller('atividade')
@ApiTags('atividade')
export class AtividadeController {
  constructor(private readonly atividadeService: AtividadeService) {}

  @ApiOperation({summary:'Criar uma nova atividade'})
  @ApiResponse({status: 200, description:'Atividade criada com sucesso.', type:Atividade})
  @Post()
  create(@Body() createAtividadeDto: CreateAtividadeDto) {
    return this.atividadeService.create(createAtividadeDto);
  }

  @ApiOperation({summary:'Listar atividades'})
  @ApiResponse({status: 200, description:'Ok', type:[Atividade]})
  @Get()
  @ApiQuery({name:'projecao',allowEmptyValue: true,schema:{default: 'APP'}})
  findAll(@Query('projecao') projecao:string = 'APP') {
    return this.atividadeService.findAll(projecao);
  }
  
  @ApiOperation({summary:'Buscar uma atividade'})
  @ApiResponse({status: 200, description:'Ok', type:Atividade})
  @Get(':id')
  @ApiQuery({name:'projecao',allowEmptyValue: true,schema:{default: 'APP'}})
  findOne(@Query('projecao') projecao:string = 'APP',@Param('id') id: string) {
    return this.atividadeService.findOne(projecao,+id);
  }

  @ApiOperation({summary:'Atualizar uma atividade'})
  @ApiResponse({status: 200, description:'Atividade atualizada com sucesso.', type:Atividade})
  @Put(':id')
  update(@Param('id') id: string, @Body() updateAtividadeDto: UpdateAtividadeDto) {
    return this.atividadeService.update(+id, updateAtividadeDto);
  }

  @ApiOperation({summary:'Apagar dados de uma atividade'})
  @ApiResponse({status: 200, description:'Dados apagados com sucesso.', type:Atividade})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.atividadeService.remove(+id);
  }
}

import { Controller, Get, Post, Body, Put, Param, Delete, Query } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CheckListService } from './check-list.service';
import { CreateCheckListDto } from './dto/create-check-list.dto';
import { UpdateCheckListDto } from './dto/update-check-list.dto';
import { CheckList } from './entities/check-list.entity';

@Controller('check-list')
@ApiTags('check-list')
export class CheckListController {
  constructor(private readonly checkListService: CheckListService) {}

  @ApiOperation({summary:'Criar uma nova check-list'})
  @ApiResponse({status: 200,description: 'Check-list criada com sucesso.',type: CheckList})
  @Post()
  create(@Body() createCheckListDto: CreateCheckListDto) {
    return this.checkListService.create(createCheckListDto);
  }

  @ApiOperation({summary:'Listar check-lists'})
  @ApiResponse({status: 200,description: 'Ok',type: [CheckList]})
  @ApiQuery({name:'projecao',allowEmptyValue:true, schema:{default: 'APP'}})
  @Get()
  findAll(@Query('projecao') projecao:string = 'APP') {
    return this.checkListService.findAll(projecao);
  }

  @ApiOperation({summary:'Buscar uma check-list'})
  @ApiResponse({status: 200,description: 'Ok',type: CheckList})
  @ApiQuery({name:'projecao',allowEmptyValue:true, schema:{default: 'APP'}})
  @Get(':id')
  findOne(@Query('projecao') projecao:string = 'APP', @Param('id') id: string) {
    return this.checkListService.findOne(projecao,+id);
  }

  @ApiOperation({summary:'Atualizar uma check-list'})
  @ApiResponse({status: 200,description: 'Check-list atualizada com sucesso.',type: CheckList})
  @Put(':id')
  update(@Param('id') id: string, @Body() updateCheckListDto: UpdateCheckListDto) {
    return this.checkListService.update(+id, updateCheckListDto);
  }

  @ApiOperation({summary:'Apagar dados de uma check-list'})
  @ApiResponse({status: 200,description: 'Dados apagados com sucesso.',type: CheckList})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.checkListService.remove(+id);
  }
}

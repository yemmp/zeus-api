import { Controller, Get, Post, Body, Put, Param, Delete, Query } from '@nestjs/common';
import { TestDriveService } from './test-drive.service';
import { CreateTestDriveDto } from './dto/create-test-drive.dto';
import { UpdateTestDriveDto } from './dto/update-test-drive.dto';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { TestDrive } from './entities/test-drive.entity';
import { QueryFormularioDTO } from 'src/formulario/dto/query-formulario.dto';

@Controller('test-drive')
@ApiTags('test-drive')
export class TestDriveController {
  constructor(private readonly testDriveService: TestDriveService) {}

  @ApiOperation({summary:'Criar um test-drive'})
  @ApiResponse({status: 200, description:'Test-drive criado com sucesso.' , type:TestDrive })
  @Post()
  create(@Body() createTestDriveDto: CreateTestDriveDto, @Query() numCpf:string, @Query() datNascimento: string) {
    return this.testDriveService.create(createTestDriveDto,numCpf,datNascimento );
  }
  
  @ApiOperation({summary:'Listar test-drives'})
  @ApiResponse({status: 200, description:'Ok' , type:[TestDrive] })
  @ApiQuery({name:'projecao',allowEmptyValue:true,schema:{default:'APP'}})
  @Get()
  findAll(@Query('projecao') projecao:string ='APP') {
    return this.testDriveService.findAll(projecao);
  }
  
  @ApiOperation({summary:'Buscar um test-drive'})
  @ApiResponse({status: 200, description:'Ok' , type:TestDrive })
  @ApiQuery({name:'projecao',allowEmptyValue:true,schema:{default:'APP'}})
  @Get(':id')
  findOne(@Query('projecao') projecao:string ='APP',@Param('id') id: string) {
    return this.testDriveService.findOne(projecao,+id);
  }

  @ApiOperation({summary:'Atualizar um test-drive'})
  @ApiResponse({status: 200, description:'Test-drive atualizado com sucesso.' , type:TestDrive })
  @Put(':id')
  update(@Param('id') id: string, @Body() updateTestDriveDto: UpdateTestDriveDto) {
    return this.testDriveService.update(+id, updateTestDriveDto);
  }

  @ApiOperation({summary:'Apagar dados de um test-drive'})
  @ApiResponse({status: 200, description:'Dados apagados com sucesso.' , type:TestDrive })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testDriveService.remove(+id);
  }
}

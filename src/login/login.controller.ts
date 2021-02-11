import { Controller, Get, Post, Body, Put, Param, Delete, Query } from '@nestjs/common';
import { LoginService } from './login.service';
import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Login } from './entities/login.entity';

@Controller('login')
@ApiTags('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @ApiOperation({summary:'Criar um novo login'})
  @ApiResponse({status: 200,description:'Login criado com sucesso.',type:Login})
  @Post()
  create(@Body() createLoginDto: CreateLoginDto) {
    return this.loginService.create(createLoginDto);
  }

  @ApiOperation({summary:'Listar logins'})
  @ApiResponse({status: 200,description:'Ok',type:[Login]})
  @ApiQuery({name:'projecao',allowEmptyValue:true,schema:{default:'APP'}})
  @Get()
  findAll(@Query('projecao') projecao:string = 'APP') {
    return this.loginService.findAll(projecao);
  }
  
  @ApiOperation({summary:'Buscar um login'})
  @ApiResponse({status: 200,description:'Ok',type:Login})
  @ApiQuery({name:'projecao',allowEmptyValue:true,schema:{default:'APP'}})
  @Get(':id')
  findOne(@Query('projecao') projecao:string = 'APP',@Param('id') id: string) {
    return this.loginService.findOne(projecao,+id);
  }

  @ApiOperation({summary:'Atualizar um login'})
  @ApiResponse({status: 200,description:'Login atualizado com sucesso.',type:Login})
  @Put(':id')
  update(@Param('id') id: string, @Body() updateLoginDto: UpdateLoginDto) {
    return this.loginService.update(+id, updateLoginDto);
  }

  @ApiOperation({summary:'Apagar dados de um login'})
  @ApiResponse({status: 200,description:'Dados apagados com sucesso.',type:Login})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.loginService.remove(+id);
  }
}

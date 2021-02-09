import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { DispositivoService } from './dispositivo.service';
import { CreateDispositivoDto } from './dto/create-dispositivo.dto';
import { UpdateDispositivoDto } from './dto/update-dispositivo.dto';
import { Dispositivo } from './entities/dispositivo.entity';

@Controller('dispositivo')
@ApiTags('dispositivo')
export class DispositivoController {
  constructor(private readonly dispositivoService: DispositivoService) {}

  @ApiOperation({summary:'Criar um novo dispositivo'})
  @ApiResponse({status: 200, description:'Dispositivo criado com sucesso.', type: Dispositivo})
  @Post()
  create(@Body() createDispositivoDto: CreateDispositivoDto) {
    return this.dispositivoService.create(createDispositivoDto);
  }

  @ApiOperation({summary:'Listar dispositivos'})
  @ApiResponse({status: 200, description:'Ok', type: [Dispositivo]})
  @Get()
  findAll() {
    return this.dispositivoService.findAll();
  }

  @ApiOperation({summary:'Buscar um dispositivo'})
  @ApiResponse({status: 200, description:'Ok', type: Dispositivo})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dispositivoService.findOne(+id);
  }

  @ApiOperation({summary:'Atualizar um dispositivo'})
  @ApiResponse({status: 200, description:'Dispositivo atualizado com sucesso.', type: Dispositivo})
  @Put(':id')
  update(@Param('id') id: string, @Body() updateDispositivoDto: UpdateDispositivoDto) {
    return this.dispositivoService.update(+id, updateDispositivoDto);
  }

  @ApiOperation({summary:'Apagar dados de um dispositivo'})
  @ApiResponse({status: 200, description:'Dados apagados com sucesso.', type: Dispositivo})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dispositivoService.remove(+id);
  }
}

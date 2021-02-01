import {Controller,Get,Post,Put,Param,Delete,Body} from '@nestjs/common'
import {PontoRotaService} from './ponto-rota.service'
import {CreatePontoRotaDto} from './dto/create-ponto-rota.dto'
import {UpdatePontoRotaDto} from './dto/update-ponto-rota.dto'


@Controller('ponto-rota')
export class PontoRotaController{
    constructor(private readonly pontoRotaService: PontoRotaService){}

    @Post()
    create(@Body() createPontoRotaDto: CreatePontoRotaDto){
        return this.pontoRotaService.create(createPontoRotaDto);
    }


    @Get()
    findAll(){
        return this.pontoRotaService.findAll()
    }
    
    @Get(':id')
    findOne(@Param('id') id: string){
        return this.pontoRotaService.findOne(+id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updatePontoRotaDto: UpdatePontoRotaDto){
        return this.pontoRotaService.update(+id,updatePontoRotaDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string){
        return this.pontoRotaService.remove(+id);
    }
}
import {InjectModel} from '@nestjs/sequelize'
import {CreateExperienciaDispositivoDto} from './dto/create-experiencia-dispositivo.dto'
import {UpdateExperienciaDispositivoDto} from './dto/update-experiencia-dispositivo.dto'
import {ExperienciaDispositivo} from './entities/experiencia-dispositivo.entity'
import { BadRequestException,Injectable } from '@nestjs/common'
 
@Injectable()

export class ExperienciaDispositivoService{

    constructor(@InjectModel(ExperienciaDispositivo) private experienciaDispositivoModel: typeof ExperienciaDispositivo){}

    async create(createExperienciaDispositivoDto: CreateExperienciaDispositivoDto){
        try {
            this.experienciaDispositivoModel.create(createExperienciaDispositivoDto);
            
        } catch (error) {
            console.error('Erro ao Criar Experiencia-Dispositivo')
            throw new BadRequestException();
        }

    }

    async findAll(){
        try {
            return this.experienciaDispositivoModel.findAll();
        } catch (error) {
            
            console.error('Erro ao Buscar Experiencias-Dispositivo', error.message);
            throw new BadRequestException();
        }
    }

    async findOne(id: number){
        try {
            return this.experienciaDispositivoModel.findOne({where:{codExperienciaDispositivo:id}});
        } catch (error) {
            console.error(`Erro ao Buscar Experiencia-Dispositivo #${id}`,error.message);
            throw new BadRequestException();
        }
     }

     async update(id: number, updateExperienciaDispositivoDto: UpdateExperienciaDispositivoDto){
        try {
            ExperienciaDispositivo.update(updateExperienciaDispositivoDto,{where:{codExperienciaDispositivo: id}}).then(()=>
            console.log(`Experiencia-Dispositivo #${id} Atualizada com Sucesso`))
             
            } catch (error) {
            console.error(`Erro ao Atualizar Experiencia-Dispositivo #${id}`,error.message);
            throw new BadRequestException();
        } 
        return `Experiencia-Dispositivo #${id} Atualizada com Sucesso!`;
     }

     async remove(id:number){
         try {
             this.experienciaDispositivoModel.destroy({where:{codExperienciaDispositivo:id}});
         } catch (error) {
             console.error(`Erro ao Remover Experiencia-Dispositivo #${id}`,error.message)
             throw new BadRequestException();
         }
     }
}
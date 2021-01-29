import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { where } from 'sequelize';
import { CreateFaseExperienciaDto } from './dto/create-fase-experiencia.dto';
import { UpdateFaseExperienciaDto } from './dto/update-fase-experiencia.dto';
import { FaseExperiencia } from './entities/fase-experiencia.entity';

@Injectable()
export class FaseExperienciaService {

  constructor(@InjectModel(FaseExperiencia)private faseExperienciaModel: typeof FaseExperiencia){}

  
  async create(createFaseExperienciaDto: CreateFaseExperienciaDto) {
    try {
      this.faseExperienciaModel.create(createFaseExperienciaDto);
    } catch (error) {
      console.error('Erro ao criar Fase-Experiencia',error.message);
      throw new BadRequestException();
    }
    return 'Fase-Experiencia Criada com Sucesso';
  }

  async findAll() {
    try {
      return this.faseExperienciaModel.findAll();
      
    } catch (error) {
      console.error('Erro ao Buscar Fase-Experiencia',error.message);
      throw new BadRequestException();
    }
  }

  async findOne(id: number) {
    try {
      return this.faseExperienciaModel.findOne({where:{codFaseExperiencia:id}})
    } catch (error) {
      console.error(`Erro ao Buscar Fase-Experiencia #${id}`,error.message);
      throw new BadRequestException();
    }
    
  }

  async update(id: number, updateFaseExperienciaDto: UpdateFaseExperienciaDto) {
    try {
    FaseExperiencia.update(updateFaseExperienciaDto,{where:{codFaseExperiencia:id}}).then(()=>{
      console.log(`Fase-Experiencia  Atualizada com Sucesso`);
    })  
    } catch (error) {
      console.error(`Erro ao Aualizar Fase-Experiencia #${id}`)
      throw new BadRequestException();
    }
    return `Fase-Experiencia #${id} Atualizada com Sucesso!`;
  }

  async remove(id: number) {
    try {
      this.faseExperienciaModel.destroy({where:{codFaseExperiencia :id}});
    } catch (error) {
      console.error(`Erro ao Deleter Fase-Experiencia #${id}`,error.message);
      throw new BadRequestException();
    }
    return `Fase-Experiencia #${id} Deletada`;
  }
}

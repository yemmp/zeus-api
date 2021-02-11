import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateExperienciaDto } from './dto/create-experiencia.dto';
import { UpdateExperienciaDto } from './dto/update-experiencia.dto';
import { Experiencia } from './entities/experiencia.entity';

const EXCLUDED_APP_ATTRIBUTES = ['datCriacao','datAtualizacao','datExclusao','indAtivo','codConcessionaria','codUsuarioCriacao']


@Injectable()
export class ExperienciaService {
  constructor(@InjectModel(Experiencia)private experienciaModule: typeof Experiencia) {}

  async create(createExperienciaDto: CreateExperienciaDto) {
    try {
      this.experienciaModule.create(createExperienciaDto);
    } catch (error) {
      console.error('Erro ao Criar Experiencia',error.message);
      throw new BadRequestException();
    }
    return 'Experiencia Criada com Sucesso';
  }

  async findAll(projecao = 'APP') {
    try {
      const exclude_attr = (projecao == 'APP')? EXCLUDED_APP_ATTRIBUTES:[]
      return this.experienciaModule.findAll({attributes:{exclude:[...exclude_attr]}});
      
    } catch (error) {
      console.error('Erro ao Buscar Experiencias',error.message);
      throw new BadRequestException();
    }
  }
  
  async findOne(projecao = 'APP',id: number) {
    try {
      const exclude_attr = (projecao == 'APP')? EXCLUDED_APP_ATTRIBUTES:[]
      return this.experienciaModule.findOne({attributes:{exclude:[...exclude_attr]},where:{codExperiencia:id}});
    } catch (error) {
      console.error(`Erro ao Buscar Experiencia #${id}`,error.message);
    }
    
  }

  async update(id: number, updateExperienciaDto: UpdateExperienciaDto) {
   try {
     Experiencia.update(updateExperienciaDto,{where:{codExperiencia:id}}).then(()=>{
       console.log(`Experiencia #${id} Atualizada com Sucesso!`)
     });
   } catch (error) {
     console.error(`Erro ao Atualizar Experiencia #${id}`, error.message);
     throw new BadRequestException();
   }
    return `Experiencia #${id} Atualizada com Sucesso`;
  }

  remove(id: number) {
    try {
      this.experienciaModule.destroy({where:{codExperiencia:id}});
    } catch (error) {
      console.error(`Erro ao Deletar Experiencia #${id}`,error.message);
    }
    return `Experiencia #${id} Deletada!`;
  }
}

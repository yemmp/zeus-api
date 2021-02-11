import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateDetalheChecklistDto } from './dto/create-detalhe-checklist.dto';
import { UpdateDetalheChecklistDto } from './dto/update-detalhe-checklist.dto';
import { DetalheChecklist } from './entities/detalhe-checklist.entity';

const EXCLUDED_APP_ATTRIBUTES = []

@Injectable()
export class DetalheChecklistService {
  constructor(@InjectModel(DetalheChecklist)private detalheCheckListModule: typeof DetalheChecklist){}

  async create(createDetalheChecklistDto: CreateDetalheChecklistDto) {
    try {
      this.detalheCheckListModule.create(createDetalheChecklistDto);
    } catch (error) {
      console.error('Erro ao Criar Detalhe-CheckList',error.message);
      throw new BadRequestException();
    }

    return 'Detalhe-CheckList criado com Sucesso!';
  }

  async findAll(projecao = 'APP') {
    try {
      const exclude_attr = (projecao == 'APP')? EXCLUDED_APP_ATTRIBUTES:[]

      return this.detalheCheckListModule.findAll({attributes:{exclude:[...exclude_attr]}});
    } catch (error) {
      console.error('Erro ao Buscar Detalhe-CheckList',error.message);  
      throw new BadRequestException();
    }
    
  }

  async findOne(projecao = 'APP',id: number) {
    try {
      const exclude_attr = (projecao =='APP')? EXCLUDED_APP_ATTRIBUTES:[]
      return this.detalheCheckListModule.findOne({attributes:{exclude:[...exclude_attr]},where:{codDetalheCheckList:id}});
      
    } catch (error) {
      console.error(`Erro ao Buscar Detalhe-CheckList #${id}`,error.message);
    }
  }

  async update(id: number, updateDetalheChecklistDto: UpdateDetalheChecklistDto) {
    try {
      DetalheChecklist.update(updateDetalheChecklistDto,{where:{codDetalheCheckList:id}}).then(()=>{
        console.log(`Detalhe-CheckList #${id} Atualizado com Sucesso!`);
      })
    } catch (error) {
      console.error(`Erro ao Atualizar Detalhe-CheckList #${id}`,error.message);
      throw new BadRequestException();
    }
    return `Detalhe-CheckList #${id} Atualizado com Sucesso!`;
  }

  async remove(id: number) {
    try {
      this.detalheCheckListModule.destroy({where:{codDetalheCheckList:id}});
    } catch (error) {
      console.error(`Erro ao Deletar Detalhe-CheckList #${id}`,error.message);
    }
    return `Detalhe-CheckList #${id} Deletada!`;
  }
}

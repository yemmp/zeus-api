import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCheckListDto } from './dto/create-check-list.dto';
import { UpdateCheckListDto } from './dto/update-check-list.dto';
import { CheckList } from './entities/check-list.entity';

const EXCLUDED_APP_ATTRIBUTES = ['datCriacao','datAtualizacao','datExclusao','indAtivo','codConcessionaria','codUsuarioCriacao']

@Injectable()
export class CheckListService {

constructor(@InjectModel(CheckList)private checkListModel: typeof CheckList){}

  async create(createCheckListDto: CreateCheckListDto) {
    try {
      await this.checkListModel.create(createCheckListDto);
      console.log('Check-List Criado com Sucesso!');
      return 'Check-List Criado com Sucesso!';
    } catch (error) {
      console.error('Erro ao Criar Check-List',error.message);
      throw new BadRequestException();
    }
  }

  async findAll(projecao = 'APP') {
    try {
      const exclude_attr = (projecao == 'APP')? EXCLUDED_APP_ATTRIBUTES:[]
      return this.checkListModel.findAll({attributes:{exclude:[...exclude_attr]}});
      
    } catch (error) {
      console.error('Erro ao Buscar Check-Lists', error.message);
      throw new BadRequestException();
    }
  }
  
  async findOne(projecao = 'APP',id: number) {
    try {
      const exclude_attr = (projecao == 'APP')? EXCLUDED_APP_ATTRIBUTES:[]
      
      return this.checkListModel.findOne({attributes:{exclude:[...exclude_attr]},where:{codCheckList:id}});
      
    } catch (error) {
      console.error(`Erro ao Buscar Check-List #${id}`, error.message);
      throw new BadRequestException();
      
    }
  }

  async update(id: number, updateCheckListDto: UpdateCheckListDto) {
    try {
      CheckList.update(updateCheckListDto,{where:{codCheckList:id}}).then(()=>{
        console.log(`Check-List #${id} Atualizado com Sucesso`);
      })
    } catch (error) {
      console.error(`Erro ao Atualizar Check-List #${id}`,error.message);
      throw new BadRequestException();
    }
    
    return `Check-List #${id} Atualizada com Sucesso`;
  }

  remove(id: number) {
    try {
      this.checkListModel.destroy({where:{codCheckList:id}});
    } catch (error) {
      console.error(`Erro ao Deletar Check-List #${id}`,error.message);
      throw new BadRequestException();
    }
    return `Check-List #${id} Deletada!`;
  }
}

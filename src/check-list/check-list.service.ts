import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCheckListDto } from './dto/create-check-list.dto';
import { UpdateCheckListDto } from './dto/update-check-list.dto';
import { CheckList } from './entities/check-list.entity';

@Injectable()
export class CheckListService {

constructor(@InjectModel(CheckList)private checkListModel: typeof CheckList){}

  async create(createCheckListDto: CreateCheckListDto) {
    try {
      this.checkListModel.create(createCheckListDto);
    } catch (error) {
      console.error('Erro ao Criar Check-List',error.message);
      throw new BadRequestException();
    }
    return 'Check-List Criado com Sucesso!';
  }

  async findAll() {
    try {
      return this.checkListModel.findAll();
      
    } catch (error) {
      console.error('Erro ao Buscar Check-Lists', error.message);
      throw new BadRequestException();
    }
  }

  async findOne(id: number) {
    try {
      return this.checkListModel.findOne({where:{codCheckList:id}});
      
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

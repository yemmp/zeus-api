import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateAtividadeDto } from './dto/create-atividade.dto';
import { UpdateAtividadeDto } from './dto/update-atividade.dto';
import { Atividade } from './entities/atividade.entity';

@Injectable()
export class AtividadeService {
  constructor(@InjectModel(Atividade)private atividadeModel: typeof Atividade){}


  async create(createAtividadeDto: CreateAtividadeDto) {
    try {
      this.atividadeModel.create(createAtividadeDto);
    } catch (error) {
      console.error('Erro ao Criar a Atividade',error.message);
      throw new BadRequestException();
    }
    return 'Atividade Criada com Sucesso!';
  }

  async findAll() {
    try {
      return this.atividadeModel.findAll();
    } catch (error) {
      console.error('Erro ao Procurar Atividades',error.message);
      throw new BadRequestException();
    }
  }

  async findOne(id: number) {
    try {
      
      return this.atividadeModel.findOne({where:{codAtividade: id}});
    
    } catch (error) {
    
      console.error(`Erro ao Procurar Atividade #${id}`, error.message);
      throw new BadRequestException();
    
    }
  }

  async update(id: number, updateAtividadeDto: UpdateAtividadeDto) {
    try {
      
      Atividade.update(updateAtividadeDto,{where:{codAtividade:id}})
      .then(()=>{console.log(`Atividade #${id} Atualizada com Sucesso!`)});
    } catch (error) {
      console.error(`Erro ao Atualizar Atividade #${id}`,error.message);
      throw new BadRequestException();
    }

    return `Atividade #${id} Atualizada com Sucesso! `;
  }

  async remove(id: number) {
    try {
      
      const deleteAtividade = this.atividadeModel.destroy({where:{codAtividade: id}});
      console.log(`Atividade #${id} Deletada! ${deleteAtividade} Registros Apagados!`);

    } catch (error) {
      console.error(`Erro ao Apagar Atividade #${id}`,error.message);
      throw new BadRequestException();
      
    }
    return `This action removes a #${id} atividade`;
  }
}

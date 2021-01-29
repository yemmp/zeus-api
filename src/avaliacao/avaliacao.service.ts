import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateAvaliacaoDto } from './dto/create-avaliacao.dto';
import { UpdateAvaliacaoDto } from './dto/update-avaliacao.dto';
import { Avaliacao } from './entities/avaliacao.entity';

@Injectable()
export class AvaliacaoService {

  constructor(@InjectModel(Avaliacao)private avaliacaoModel: typeof Avaliacao){}
  async create(createAvaliacaoDto: CreateAvaliacaoDto) {
    try {
     this.avaliacaoModel.create(createAvaliacaoDto);
    } catch (error) {
      console.error('Erro ao Criar Avaliacao',error.message);
      throw new BadRequestException();
    }
    return 'Avaliacao Criada com Sucesso!';
  }

  async findAll() {
    try {
      return this.avaliacaoModel.findAll();
      
    } catch (error) {
      console.error('Erro ao Buscar Avaliacoes');
      throw new BadRequestException();
    }
  }

  async findOne(id: number) {
    try {
      return this.avaliacaoModel.findOne({where:{codAvaliacao:id}});

      
    } catch (error) {
      console.error(`Erro ao Buscar Avaliacao #${id}`,error.message);
      throw new BadRequestException();
    }
  }
  
  async update(id: number, updateAvaliacaoDto: UpdateAvaliacaoDto) {
    try {
      Avaliacao.update(updateAvaliacaoDto,{where:{codAvaliacao:id}}).then(()=>{
        console.log(`Avaliacao #${id} Atualizada com Sucesso!`);
      })
    } catch (error) {
      
      console.error(`Erro ao Atualizar Avaliacao #${id}`,error.message);
      throw new BadRequestException();
    }
    return `Avaliacao #${id} Atualizada com Sucesso!`;
  }
  
  async remove(id: number) {
    try {
      this.avaliacaoModel.destroy({where:{codAvaliacao:id}});
    } catch (error) {
      
      console.error(`Erro ao Deletar Avaliacao #${id}`,error.message);
      throw new BadRequestException();
    }
    return `Avaliacao #${id} Deletada!`;
  }
}

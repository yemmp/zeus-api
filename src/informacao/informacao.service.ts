import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateInformacaoDto } from './dto/create-informacao.dto';
import { UpdateInformacaoDto } from './dto/update-informacao.dto';
import { Informacao } from './entities/informacao.entity';

@Injectable()
export class InformacaoService {

  constructor(@InjectModel(Informacao)private informacaoModel: typeof Informacao){}
  async create(createInformacaoDto: CreateInformacaoDto) {
    try {
      this.informacaoModel.create(createInformacaoDto);
    } catch (error) {
      console.error('Erro ao Criar Informacao', error.message);
      throw new BadRequestException();
    }
    return 'Informacao Criada com Sucesso!';
  }

  async findAll() {
    try {
      return this.informacaoModel.findAll();
      
    } catch (error) {
      console.error('Erro ao Buscar Informacoes',error.message);
      throw new BadRequestException();
    }
  }

  async findOne(id: number) {
    try {
      return this.informacaoModel.findOne({where:{codInformacao:id}});
      
    } catch (error) {
      console.error(`Erro ao Buscar Informacao #${id}`,error.message);
      throw  new BadRequestException();
    }
  }

  async update(id: number, updateInformacaoDto: UpdateInformacaoDto) {
    try {
      Informacao.update(updateInformacaoDto,{where:{codInformacao:id}}).then(()=>{
        console.log(`Informacao #${id} Atualizado com Sucesso!`);

      })
    } catch (error) {
      console.error(`Erro ao Atualizar Informacao #${id}`,error.message);
      throw new BadRequestException();
    }
    return `Informacao #${id} Atualizada`;
  }

  async remove(id: number) {
    try {
      this.informacaoModel.destroy({where:{codInformacao:id}});
    } catch (error) {
      console.error(`Erro ao Deletar Informacao #${id}`,error.message);
    }
    return `Informacao #${id} Deletada `;
  }
}

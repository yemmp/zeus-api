import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreatePontoTrajetoDto } from './dto/create-ponto-trajeto.dto';
import { UpdatePontoTrajetoDto } from './dto/update-ponto-trajeto.dto';
import { PontoTrajeto } from './entities/ponto-trajeto.entity';

@Injectable()
export class PontoTrajetoService {

  constructor(@InjectModel(PontoTrajeto)private pontoTrajetoModel: typeof PontoTrajeto){}

  async create(createPontoTrajetoDto: CreatePontoTrajetoDto) {
    try {
     
      this.pontoTrajetoModel.create(createPontoTrajetoDto);
    } catch (error) {
      console.error('Erro ao Criar Ponto-Trajeto',error.message);
      throw new BadRequestException();
    }
    return 'Ponto Trajeto Criado com Sucesso!';
  }

  async findAll() {
    try {
      return this.pontoTrajetoModel.findAll();
      
    } catch (error) {
      
      console.error('Erro ao Buscar Pontos-Trajeto',error.message);
      throw new BadRequestException();

    }
  }

  async findOne(id: number) {
    try {
      return this.pontoTrajetoModel.findOne({where:{codPontoTrajeto:id}});
    } catch (error) {
      console.error (`Erro ao Buscar Ponto-Trajeto #${id}`, error.message);
      throw new BadRequestException();
    }
  }

  async update(id: number, updatePontoTrajetoDto: UpdatePontoTrajetoDto) {
    try {
      PontoTrajeto.update(updatePontoTrajetoDto,{where:{codPontoTrajeto:id}})
      .then(()=>{console.log(`Ponto-Trajeto #${id} Atualizado com Sucesso!`)});
    } catch (error) {
      console.error(`Erro ao Atualizar Ponto-Trajeto #${id}`, error.message);
      throw new BadRequestException();
    }
    return `Ponto-Trajeto #${id} Atualizado com Sucesso!`;
  }

  async remove(id: number) {
    try {
      const deletePontoTrajeto = this.pontoTrajetoModel.destroy({where:{codPontoTrajeto:id}});
      console.log(`Ponto-Trajeto #${id} Deletado! ${deletePontoTrajeto} Registros Apagados!`);
    } catch (error) {
      console.error(`Erro ao Deletar Ponto-Trajeto #${id}`, error.message);
    }
    return `Ponto-Trajeto #${id} Deletado!`;
  }
}

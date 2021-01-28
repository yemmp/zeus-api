import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTipoFaseDto } from './dto/create-tipo-fase.dto';
import { UpdateTipoFaseDto } from './dto/update-tipo-fase.dto';
import { TipoFase } from './entities/tipo-fase.entity';

@Injectable()
export class TipoFaseService {
  
  constructor(@InjectModel(TipoFase)private tipoFaseModel: typeof TipoFase){}
  
  
  async create(createTipoFaseDto: CreateTipoFaseDto) {

    try {
      this.tipoFaseModel.create(createTipoFaseDto);
    } catch (error) {
      console.error('Erro ao Criar Tipo-Fase',error.message);
      throw new BadRequestException();
    }
    return 'Tipo-Fase Criado com Sucesso!';
  }

  async findAll() {
    try {
      return this.tipoFaseModel.findAll();
      
    } catch (error) {
      console.error('Erro ao Buscar Tipos-Fase',error.message);
      throw new BadRequestException();
    }
  }

  async findOne(id: number) {
    try {
      return this.tipoFaseModel.findOne({where:{codTipoFase:id}});
      
    } catch (error) {
      console.error(`Erro ao Buscar Tipo-Fase #${id}`,error.message);
    }
  }
  
  async update(id: number, updateTipoFaseDto: UpdateTipoFaseDto) {
    try {
      TipoFase.update(updateTipoFaseDto,{where:{codTipoFase:id}}).then(()=>{
        console.log(`Tipo-Fase #${id} Atualizado com Sucesso!`);
      })
    } catch (error) {
      
      console.error(`Erro ao Atualizar Tipo-Fase #${id}`,error.message);
    }
    return `Tipo-Fase #${id} Atualizado com Sucesso!`;
  }

  async remove(id: number) {
    try {
      const deleteTipoFase = this.tipoFaseModel.destroy({where:{codTipoFase:id}});
      console.log(`Tipo-Fase #${id} Deletado! ${deleteTipoFase} Registros Apagados!`);

    } catch (error) {
      console.error(`Erro ao Deletar Tipo-Fase #${id}`, error.message);
    }
    return `Tipo-Fase #${id} Deletado!`;
  }
}

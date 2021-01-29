import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTipoMidiaDto } from './dto/create-tipo-midia.dto';
import { UpdateTipoMidiaDto } from './dto/update-tipo-midia.dto';
import { TipoMidia } from './entities/tipo-midia.entity';

@Injectable()
export class TipoMidiaService {
  
  constructor(@InjectModel(TipoMidia)private tipoMidiaModel: typeof TipoMidia){}
  
  async create(createTipoMidiaDto: CreateTipoMidiaDto) {
    try {
      this.tipoMidiaModel.create(createTipoMidiaDto);
    } catch (error) {
      console.error('Erro ao Criar Tipo-Midia',error.message);
      throw new BadRequestException();
    }
    return 'Tipo-Midia Criado com Sucesso';
  }

  async findAll() {
    try {
      return this.tipoMidiaModel.findAll();
      
    } catch (error) {
      console.error('Erro ao Buscar Tipos-Midia', error.message);
      throw new BadRequestException();
    }
  }
  
  async findOne(id: number) {
    try {
      return this.tipoMidiaModel.findOne({where:{codTipoMidia:id}});
      
    } catch (error) {
      
      console.error(`Erro ao Buscar Tipo-Midia #${id}`, error.message);
      throw new BadRequestException();
    }
  }
  
  async update(id: number, updateTipoMidiaDto: UpdateTipoMidiaDto) {
    try {
      TipoMidia.update(updateTipoMidiaDto,{where:{codTipoMidia:id}}).then(()=>{
        console.log(`Tipo-Midia #${id} Atualizado com Sucesso!`);
      })
    } catch (error) {
      
      
      console.error(`Erro ao Atualizar Tipo-Midia #${id}`, error.message);
      throw new BadRequestException();
    }
    return `Tipo-Midia #${id} Atualizado com Sucesso!`;
  }
  
  async remove(id: number) {
    try {
      const deleteTipoMidia = this.tipoMidiaModel.destroy({where:{codTipoMidia: id}});
      console.log(`Tipo-Midia #${id} Deletado! ${deleteTipoMidia} Registros Apagados!`);
    } catch (error) {
      console.error(`Erro ao Deletar Tipo-Midia #${id}`, error.message);
      throw new BadRequestException();
      
    }
    return `Tipo-Midia #${id} Deletado!`;
  }
}

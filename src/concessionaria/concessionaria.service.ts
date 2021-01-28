import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateConcessionariaDto } from './dto/create-concessionaria.dto';
import { UpdateConcessionariaDto } from './dto/update-concessionaria.dto';
import { Concessionaria } from './entities/concessionaria.entity';

@Injectable()
export class ConcessionariaService {
  constructor(@InjectModel(Concessionaria) private concessionariaModel : typeof Concessionaria){}

  async create(createConcessionariaDto: CreateConcessionariaDto) {
   try {
     
     this.concessionariaModel.create(createConcessionariaDto);

   } catch (error) {
     
    console.error('Erro ao Criar Concessionaria',error.message);
    throw new BadRequestException();
   }
   
   
    console.log ('Concessionaria criada com sucesso');
    return 'Concessionaria Criada com Sucesso!';
  }

  async findAll() {
    try {
      
      return this.concessionariaModel.findAll();

    } catch (error) {
      
      console.error('Erro ao Buscar Concessionarias', error.message);
      throw new BadRequestException();

    }

  }

  async findOne(id: number) {
    try {
      
      return this.concessionariaModel.findOne({where:{ codConcessionaria:id}});;

    } catch (error) {

      console.error(`Erro ao Buscar Concessionaria #${id}`,error.message);
      throw new BadRequestException();

    }
  }

  async update(id: number, updateConcessionariaDto: UpdateConcessionariaDto) {
    
    try {
      Concessionaria.update(updateConcessionariaDto,{
        where:{codConcessionaria:id}}).then(()=>
        console.log(`Concessionaria #${id} atualizada com sucesso!`));
      
    } catch (error) {
      console.error(`Erro ao Atualizar Concessionaria #${id}`, error.message);
      throw new BadRequestException();
    }
      return `Concessionaria #${id} Atualizada com Sucesso!`;
    }
    
  async remove(id: number) {
    try {
      const deleteConcessionaria = this.concessionariaModel.destroy({
        where:{codConcessionaria : id}});
      console.log(`Concessionaria #${id} Deletada! ${deleteConcessionaria} Registros Apagados!`);
    } catch (error) {
      
      console.error(`Erro ao Deletar Concessionaria #${id}`, error.message);
      throw new BadRequestException();

    }
    return `Concessionaria #${id} Deletada!`;
  }
}

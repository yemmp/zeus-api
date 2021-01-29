import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateMidiaDto } from './dto/create-midia.dto';
import { UpdateMidiaDto } from './dto/update-midia.dto';
import { Midia } from './entities/midia.entity';

@Injectable()
export class MidiaService {

  constructor(@InjectModel(Midia)private midiaModel: typeof Midia){}

  async create(createMidiaDto: CreateMidiaDto) {
    try {
      this.midiaModel.create(createMidiaDto);
    } catch (error) {
      console.error('Erro ao Criar Midia', error.message);
      throw new BadRequestException();
    }
    return 'Midia Criada com Sucesso';
  }

  async findAll() {
    try {
      return this.midiaModel.findAll();
      
    } catch (error) {
      console.error('Erro ao Buscar Midias', error.message);
      throw new BadRequestException();
    }
  }

  async findOne(id: number) {
    try {
      return this.midiaModel.findOne({where:{codMidia: id}});
      
    } catch (error) {
      console.error(`Erro ao Buscar Midia #${id}`, error.message);
    }
  }

  async update(id: number, updateMidiaDto: UpdateMidiaDto) {
    try {
      Midia.update(updateMidiaDto,{where:{codMidia:id}}).then(()=>{
        console.log(`Midia #${id} Atualizada com Sucesso!`);

      })
    } catch (error) {
      console.error(`Erro ao Atualizar Midia #${id}`, error.message);
      throw new BadRequestException();
    }
    return `Midia #${id} Atualizada com Sucesso!`;
  }

  async remove(id: number) {
    try {

      const deleteMidia = this.midiaModel.destroy({where:{codMidia:id}});
      console.log(`Midia #${id} Deletada! ${deleteMidia} Registros Apagados!`);
    
    } catch (error) {
      console.error(`Erro ao Remover Midia #${id}`, error.message);
      throw new BadRequestException();
    }
    return `Midia #${id} Deletada! `;
  }
}

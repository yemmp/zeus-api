import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateIconeDto } from './dto/create-icone.dto';
import { UpdateIconeDto } from './dto/update-icone.dto';
import { Icone } from './entities/icone.entity';

@Injectable()
export class IconeService {

  constructor(@InjectModel(Icone)private iconeModel: typeof Icone){}
  async create(createIconeDto: CreateIconeDto) {
    try {
      this.iconeModel.create(createIconeDto);
    } catch (error) {
      console.error('Erro ao Criar Usuario',error.message);
      throw new BadRequestException();
    }
    return 'Icone Criado com Sucesso!';
  }

  async findAll() {
    try {
      return this.iconeModel.findAll();
      
    } catch (error) {
      console.error('Erro ao Buscar Icones',error.message);
      throw new BadRequestException();
    }
  }

  async findOne(id: number) {
    try {
      return this.iconeModel.findOne({where:{codIcone:id}});
      
    } catch (error) {
      console.error(`Erro ao Criar Icone`, error.message);
      throw new BadRequestException();
    }
  }

  async update(id: number, updateIconeDto: UpdateIconeDto) {
    try {
      Icone.update(updateIconeDto,{where:{codIcone:id}}).then(()=>{
        console.log(`Icone #${id} Atualizado com Sucesso!`);
      })
    } catch (error) {
      console.error(`Erro ao Atualizar Icone #${id}`,error.message);
      throw new BadRequestException();
    }
    return `Icone #${id} Atualizado com Sucesso!`;
  }

  async remove(id: number) {
    try {
      this.iconeModel.destroy({where:{codIcone:id}});
    } catch (error) {
      console.error(`Erro ao Deletar Icone #${id}`,error.message);
    }
    return `Icone #${id} Deletado!`;
  }
}

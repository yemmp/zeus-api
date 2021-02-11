import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateRotaDto } from './dto/create-rota.dto';
import { UpdateRotaDto } from './dto/update-rota.dto';
import { Rota } from './entities/rota.entity';

const EXCLUDED_APP_ATTRIBUTES = ['']

@Injectable()
export class RotaService {

  constructor(@InjectModel(Rota)private rotaModel: typeof Rota){}

  async create(createRotaDto: CreateRotaDto) {
    try {
      this.rotaModel.create(createRotaDto);
    } catch (error) {
      console.error('Erro ao Criar Rota',error.message);
      throw new BadRequestException();
    }
  }

  async findAll(projecao = 'APP') {
    try {
      const exclude_attr = (projecao == 'APP')? EXCLUDED_APP_ATTRIBUTES:[]
      return this.rotaModel.findAll({attributes:{exclude:[...exclude_attr]}});
    } catch (error) {
      console.error('Erro ao Buscar Rotas', error.message);
      throw new BadRequestException();
    }
    
  }

  async findOne(projecao = 'APP',id: number) {
    try {
      const exclude_attr = (projecao == 'APP')? EXCLUDED_APP_ATTRIBUTES:[]

      return this.rotaModel.findOne({attributes:{exclude:[...exclude_attr]},where:{codRota:id}});
    } catch (error) {
      console.error(`Erro ao Buscar Rota #${id}`, error.message);
    }
  }

  async update(id: number, updateRotaDto: UpdateRotaDto) {
    try {
      Rota.update(updateRotaDto,{where:{codRota:id}}).then(()=>
      console.log(`Rota #${id} Atualizada com Sucesso!`));
    } catch (error) {
      console.error(`Erro ao Atualizar Rota #${id}`, error.message);
      throw new BadRequestException();
    }
    return `Rota #${id} Atualizada com Sucesso!`;
  }

  async remove(id: number) {
    try {
      const deleteRota = this.rotaModel.destroy({where:{codRota:id}});
      console.log(`Rota #${id} Deletada! ${deleteRota} Registros Apagados!`);
    } catch (error) {
      console.error(`Erro ao Deletar Rota #${id}`, error.message);
    }
    return `Rota #${id} Deletada!`;
  }
}

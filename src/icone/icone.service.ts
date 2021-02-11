import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateIconeDto } from './dto/create-icone.dto';
import { UpdateIconeDto } from './dto/update-icone.dto';
import { Icone } from './entities/icone.entity';

const EXCLUDED_APP_ATTRIBUTES = ['nomDiretorio','indAtivo','codUsuarioCriacao','dscIcone','nomIcone','datCriacao','datAtualizacao','datExclusao']

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

  async findAll(projecao = 'APP') {
    try {
      const exclude_attr = (projecao == 'APP')? EXCLUDED_APP_ATTRIBUTES : []
      return this.iconeModel.findAll({attributes:{exclude:[...exclude_attr]}});
      
    } catch (error) {
      console.error('Erro ao Buscar Icones',error.message);
      throw new BadRequestException();
    }
  }
  
  async findOne(projecao = 'APP', id: number) {
    try {
      const exclude_attr = (projecao == 'APP')? EXCLUDED_APP_ATTRIBUTES : []
      return this.iconeModel.findOne({attributes:{exclude:[...exclude_attr]},where:{codIcone:id}});
      
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

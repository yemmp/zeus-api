import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTipoPerfilDto } from './dto/create-tipo-perfil.dto';
import { UpdateTipoPerfilDto } from './dto/update-tipo-perfil.dto';
import { TipoPerfil } from './entities/tipo-perfil.entity';

@Injectable()
export class TipoPerfilService {
  constructor(@InjectModel(TipoPerfil) private tPerfilModel: typeof TipoPerfil){}
  async create(createTipoPerfilDto: CreateTipoPerfilDto) {
    try {
      this.tPerfilModel.create(createTipoPerfilDto);
      
    } catch (error) {
      console.error('Erro ao Criar Tipo-Perfil',error.message);
      throw new BadRequestException();
    }
    console.log `Tipo-Perfil criado com sucesso`;
    return `Tipo-Perfil Criado com Sucesso!`;
  }

  async findAll() {
    try {
      return this.tPerfilModel.findAll();
      
    } catch (error) {
      console.error('Erro ao Buscar Tipos-Perfil',error.message);
      throw new BadRequestException();
    }
  }

  async findOne(id: string) {
    try {
      return this.tPerfilModel.findOne({where:{codTPerfil:id}})
      
    } catch (error) {
      console.error(`Erro ao Buscar Tipo-Perfil #${id}`,error.message );
      throw new BadRequestException();

    }
  }

  async update(id: string, updateTipoPerfilDto: UpdateTipoPerfilDto) {
    try {
      TipoPerfil.update(updateTipoPerfilDto, {
        where: {codPerfil:id}}).then(()=>
        console.log(`Tipo-Perfil #${id} atualizado com sucesso!`)
        );
      
    } catch (error) {
      console.error(`Erro ao Atualizar Tipo-Perfil #${id}`, error.message);
      throw new BadRequestException();
    }
  }

  async remove(id: string) {
    try {
      const deleteCount = this.tPerfilModel.destroy({
        where: {codPerfil: id}});
        console.log(`Tipo-Perfil #${id} deletado! ${deleteCount} Registros Apagados!`)
      
    } catch (error) {
      console.error(`Erro ao Deletar Tipo-Perfil #${id}`);
      throw new BadRequestException();

    }
    return `Tipo-Perfil #${id} Deletado!`;
  }
}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTipoPerfilDto } from './dto/create-tipo-perfil.dto';
import { UpdateTipoPerfilDto } from './dto/update-tipo-perfil.dto';
import { TipoPerfil } from './entities/tipo-perfil.entity';

@Injectable()
export class TipoPerfilService {
  constructor(@InjectModel(TipoPerfil) private tPerfilModel: typeof TipoPerfil){}
  create(createTipoPerfilDto: CreateTipoPerfilDto) {
    this.tPerfilModel.create(createTipoPerfilDto);
    console.log `Tipo-Perfil criado com sucesso`
    return `Ok`
  }

  findAll() {
    return this.tPerfilModel.findAll();
  }

  findOne(id: number) {
    return this.tPerfilModel.findOne({where:{codTPerfil:id}})
  }

  update(id: number, updateTipoPerfilDto: UpdateTipoPerfilDto) {
    TipoPerfil.update(updateTipoPerfilDto, {
      where: {codTPerfil:id}}).then(()=>
      console.log(`Tipo-Perfil #${id} atualizado com sucesso!`)
      );
  }

  remove(id: number) {
    const deleteCount = this.tPerfilModel.destroy({
      where: {codTPerfil: id}});
      console.log(`Tipo-Perfil #${id} deletado!`)
  }
}

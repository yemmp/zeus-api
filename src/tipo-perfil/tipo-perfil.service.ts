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

  findOne(id: string) {
    return this.tPerfilModel.findOne({where:{codTPerfil:id}})
  }

  update(id: string, updateTipoPerfilDto: UpdateTipoPerfilDto) {
    TipoPerfil.update(updateTipoPerfilDto, {
      where: {codPerfil:id}}).then(()=>
      console.log(`Tipo-Perfil #${id} atualizado com sucesso!`)
      );
  }

  remove(id: string) {
    const deleteCount = this.tPerfilModel.destroy({
      where: {codPerfil: id}});
      console.log(`Tipo-Perfil #${id} deletado!`)
  }
}

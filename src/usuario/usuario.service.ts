import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectModel(Usuario)
    private usuarioModel: typeof Usuario,
  ) {}
  create(createUsuarioDto: CreateUsuarioDto) {
    
    this.usuarioModel.create(createUsuarioDto);
    console.log('Usuário criado com sucesso!');
    return 'Ok!'
  }

  findAll() {
    return this.usuarioModel.findAll();
  }

  findOne(id: number) {
    return this.usuarioModel.findOne({where: {codUsuario: id}});
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    Usuario.update(
      updateUsuarioDto,{
      where: {codUsuario: id}}).then(()=> {
        console.log(`Usuario  id=${id} atualizado com sucesso`)
      });

    
  }

  remove(id: number) {
    const deleteCount = this.usuarioModel.destroy({
      where:{codUsuario: id}
    });
    console.log(`Usuario #${id} deletado! ${deleteCount} registros apagados!`);
    
  }
}

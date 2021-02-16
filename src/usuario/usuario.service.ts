import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { DatabaseError } from 'sequelize';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';

const EXCLUDE_APP_ATTRIBUTES = ['dscSenha', 'indAtivo','codUsuarioCriacao','datCriacao','datAtualizacao','datExclusao',]

@Injectable()
export class UsuarioService {
  constructor(
    @InjectModel(Usuario)
    private usuarioModel: typeof Usuario,
  ) { }

  async create(createUsuarioDto: CreateUsuarioDto) {
    try {
      await this.usuarioModel.create(createUsuarioDto);
      console.log('Usuário criado com sucesso!');
      return 'Usuario Criado com Sucesso';
    } catch (error) {
      console.error('Erro ao Criar Usuario',error.message);
      if(error instanceof DatabaseError){
        throw new BadRequestException(error.original.message);
      }else{
        throw new BadRequestException("Database error");
      }
    }
  }

  async findAll(projecao = 'APP') {
    try {
      const exclude_attr = (projecao == 'APP')? EXCLUDE_APP_ATTRIBUTES:['dscSenha']
      return this.usuarioModel.findAll({attributes:{exclude:[...exclude_attr]}});
    } catch (error) {
      console.error('Erro ao Buscar Usuarios', error.message);
      throw new BadRequestException();
    }
  }

  async findOne(projecao = 'APP', id: number) {
    try {
      const exclude_attr = (projecao == 'APP')? EXCLUDE_APP_ATTRIBUTES:['dscSenha', 'indAtivo']
      return this.usuarioModel.findOne({
        attributes: {
          exclude:[...exclude_attr]
        },
        where: {
          codUsuario: id
        }
      });
    } catch (error) {
      console.error(`Erro ao Buscar Usuario #${id}`, error.message);
      throw new BadRequestException();
    }
  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    try {
      Usuario.update(
        updateUsuarioDto, {
        where: { codUsuario: id }
      }).then(() => {
        console.log(`Usuario #${id} atualizado com sucesso`)
        return `Usuario #${id} Atualizado com Sucesso!`;
      });

    } catch (error) {

      console.error(`Erro ao Atualizar Usuario #${id}`, error.message);
      throw new BadRequestException();
    }

  }

  async remove(id: number) {
    try {
      const deleteCount = this.usuarioModel.destroy({
        where: { codUsuario: id }
      });
      console.log(`Usuario #${id} deletado! ${deleteCount} registros apagados!`);
      return `Usuario #${id} Deletado!`;

    } catch (error) {
      console.error(`Erro ao Deletar Usuario #${id}`, error.message);
      throw new BadRequestException();

    }
  }
}

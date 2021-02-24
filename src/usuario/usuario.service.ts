import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { DatabaseError, WhereAttributeHash } from 'sequelize';
import { createQueryObject } from 'src/common/utils';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { QueryUsuarioDTO } from './dto/query-usuario.dto';
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
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Erro ao Criar Usuario`
        },
        HttpStatus.BAD_REQUEST,
        );
        
    }
  }

  async findAll(filtro: QueryUsuarioDTO) {
    try {
      let projecao = filtro.projecao
      let query = createQueryObject(filtro);
      console.log("Aplicando clausula where: ", query)
      const exclude_attr = (projecao == 'APP')? EXCLUDE_APP_ATTRIBUTES:['dscSenha']
      return this.usuarioModel.findAll({
        attributes:{
          exclude:[...exclude_attr]
        },
        where: query
      })
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Erro ao buscar Usuarios`
        },
        HttpStatus.BAD_REQUEST,
        );
        
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
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Erro ao buscar Usuario #${id}`
        },
        HttpStatus.BAD_REQUEST,
        );
        
    }
  }

  async findByNome(nomUsuario: string): Promise<Usuario | undefined>{
    return this.usuarioModel.find(Usuario => Usuario.nomUsuario === nomUsuario)
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

      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Erro ao Atualizar Usuario #${id}`
        },
        HttpStatus.BAD_REQUEST,
        );
        
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
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Erro ao deletar Usuario#${id}`
        },
        HttpStatus.BAD_REQUEST,
        );
        

    }
  }
}



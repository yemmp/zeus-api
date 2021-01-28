import { BadRequestException, Injectable } from '@nestjs/common';
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
  
  async create(createUsuarioDto: CreateUsuarioDto) {
    
    try {
      this.usuarioModel.create(createUsuarioDto);
      
    } catch (error) {
      console.error('Erro ao Criar Usuario',error.message);
      throw new BadRequestException();
    }
    console.log('Usuário criado com sucesso!');
    return 'Usuario Criado com Sucesso';
  }

  async findAll() {
    try {
      return this.usuarioModel.findAll();
      
    } catch (error) {
      console.error('Erro ao Buscar Usuarios',error.message);
      throw new BadRequestException();
    }
  }

  async findOne(id: number) {
    try {
      return this.usuarioModel.findOne({where: {codUsuario: id}});
      
    } catch (error) {
      console.error(`Erro ao Buscar Usuario #${id}`,error.message);
      throw new BadRequestException();
    }
  }
  
  async update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    try {
      Usuario.update(
        updateUsuarioDto,{
          where: {codUsuario: id}}).then(()=> {
            console.log(`Usuario #${id} atualizado com sucesso`)
          });
          
        } catch (error) {
          
          console.error(`Erro ao Atualizar Usuario #${id}`,error.message);
          throw new BadRequestException();
        }
        return `Usuario #${id} Atualizado com Sucesso!`;
        
      }
      
      async remove(id: number) {
        try {
          const deleteCount = this.usuarioModel.destroy({
            where:{codUsuario: id}
          });
          console.log(`Usuario #${id} deletado! ${deleteCount} registros apagados!`);
          
        } catch (error) {
          console.error(`Erro ao Deletar Usuario #${id}`,error.message);
          throw new BadRequestException();
          
    }
    return `Usuario #${id} Deletado!`;    
  }
}

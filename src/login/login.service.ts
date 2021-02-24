import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';
import { Login } from './entities/login.entity';

const EXCLUDED_APP_ATTRIBUTES = ['']

@Injectable()
export class LoginService {
  constructor(@InjectModel(Login) private loginModel: typeof Login) { }

  async create(createLoginDto: CreateLoginDto) {
    try {
      await this.loginModel.create(createLoginDto);
      console.log('Login Criado com Sucesso!');
      return 'Login Criado com Sucesso!';

    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Erro ao criar Login`
        },
        HttpStatus.BAD_REQUEST,
        );
        
    }
  }

  async findAll(projecao = 'APP') {
    try {
      const exclude_attr = (projecao == 'APP') ? EXCLUDED_APP_ATTRIBUTES : []

      return this.loginModel.findAll({ attributes: { exclude: [...exclude_attr] } });

    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Erro ao buscar Logins`
        },
        HttpStatus.BAD_REQUEST,
        );
        
    }
  }

  async findOne(projecao = 'APP', id: number) {
    try {
      const exclude_attr = (projecao == 'APP') ? EXCLUDED_APP_ATTRIBUTES : []

      return this.loginModel.findOne({ attributes: { exclude: [...exclude_attr] }, where: { codLogin: id } });

    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Erro ao buscar Login #${id}`
        },
        HttpStatus.BAD_REQUEST,
        );
        
    }
  }

  async update(id: number, updateLoginDto: UpdateLoginDto) {
    try {

      Login.update(updateLoginDto, {
        where: { codLogin: id }
      }).then(() =>
        console.log(`Login #${id} atualizado com sucesso!`));
      return `Login #${id} Atualizado com Sucesso!`;

    } catch (error) {

      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Erro ao Atualizar Login #${id}`
        },
        HttpStatus.BAD_REQUEST,
        );
        
    }


  }

  async remove(id: number) {

    try {
      const deleteLogin = this.loginModel.destroy({
        where: { codLogin: id }
      });

      console.log(`Login #${id} Deletado! ${deleteLogin} Registros Apagados`);
      return `Login #${id} Deletado! `

    } catch (error) {

      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Erro ao deletar Login #${id}`
        },
        HttpStatus.BAD_REQUEST,
        );
        

    }
  }
}

import { BadRequestException, Injectable } from '@nestjs/common';
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
      console.error('Erro ao Criar Login', error.message);
      throw new BadRequestException();
    }
  }

  async findAll(projecao = 'APP') {
    try {
      const exclude_attr = (projecao == 'APP') ? EXCLUDED_APP_ATTRIBUTES : []

      return this.loginModel.findAll({ attributes: { exclude: [...exclude_attr] } });

    } catch (error) {
      console.error('Erro ao Buscar Logins', error.message);
      throw new BadRequestException();
    }
  }

  async findOne(projecao = 'APP', id: number) {
    try {
      const exclude_attr = (projecao == 'APP') ? EXCLUDED_APP_ATTRIBUTES : []

      return this.loginModel.findOne({ attributes: { exclude: [...exclude_attr] }, where: { codLogin: id } });

    } catch (error) {
      console.error(`Erro ao Buscar Login #${id}`, error.message);
      throw new BadRequestException();

    }
  }

  async update(id: number, updateLoginDto: UpdateLoginDto) {
    try {

      Login.update(updateLoginDto, {
        where: { codLogin: id }
      }).then(() =>
        console.log(`Login #${id} atualizado com sucesso!`));

    } catch (error) {

      console.error(`Erro ao Atualizar Login #${id}`, error.message);
      throw new BadRequestException();

    }

    return `Login #${id} Atualizado com Sucesso!`;

  }

  async remove(id: number) {

    try {
      const deleteLogin = this.loginModel.destroy({
        where: { codLogin: id }
      });

      console.log(`Login #${id} Deletado! ${deleteLogin} Registros Apagados`);

    } catch (error) {

      console.error(`Erro ao Deletar Login #${id}`, error.message);
      throw new BadRequestException();

    }
  }
}

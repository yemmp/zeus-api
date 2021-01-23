import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';
import { Login } from './entities/login.entity';

@Injectable()
export class LoginService {
  constructor(@InjectModel(Login)private loginModel: typeof Login){}
  create(createLoginDto: CreateLoginDto) {
    this.loginModel.create(createLoginDto);
    console.log ('Login criado com sucesso');
  }

  findAll() {
    return this.loginModel.findAll();
  }

  findOne(id: number) {
    return this.loginModel.findOne({where:{ codLogin:id}});
  }

  update(id: number, updateLoginDto: UpdateLoginDto) {
    Login.update(updateLoginDto,{
      where:{codLogin:id}}).then(()=>
      console.log(`Login #${id} atualizado com sucesso!`));
  }

  remove(id: number) {
    const deleteLogin = this.loginModel.destroy({
      where:{codLogin : id}});
  }
}

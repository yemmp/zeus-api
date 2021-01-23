import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { UsuarioModule } from 'src/usuario/usuario.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Login } from './entities/login.entity';

@Module({
  controllers: [LoginController],
  providers: [LoginService],
  imports: [SequelizeModule.forFeature([Login]),
  UsuarioModule]
})
export class LoginModule {}

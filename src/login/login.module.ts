import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { UsuarioModule } from 'src/usuario/usuario.module';

@Module({
  controllers: [LoginController],
  providers: [LoginService],
  imports: [UsuarioModule]
})
export class LoginModule {}

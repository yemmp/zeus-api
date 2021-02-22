import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsuarioModule } from 'src/usuario/usuario.module';
import { AuthService } from './auth.service';
import { jwtConstants } from './constants';
import { JwTStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';

@Module({
  providers: [AuthService,LocalStrategy,JwTStrategy],
  imports: [UsuarioModule,PassportModule,
  JwtModule.register({secret: jwtConstants.secret,
  signOptions:{ expiresIn: '300s'},})],
  exports:[AuthService]
})
export class AuthModule {}

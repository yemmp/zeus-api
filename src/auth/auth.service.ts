import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsuarioService } from 'src/usuario/usuario.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsuarioService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findByUserName(username);
    if (user && user.dscSenha === pass) {
      const { dscSenha, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    console.log('login ', user)
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}

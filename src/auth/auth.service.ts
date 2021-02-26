import { Injectable } from '@nestjs/common';

import { JwtService} from '@nestjs/jwt'
import { UsuarioService } from 'src/usuario/usuario.service';

@Injectable()
export class AuthService {

    constructor( private usuarioService : UsuarioService,
    private jwtService: JwtService){}

    async validateUser(dscLogin: string, senha: string): Promise<any>{
        const usuario = await this.usuarioService.findByUserName(dscLogin);
        if(usuario && usuario.dscSenha === senha){
            const {dscSenha,...result} = usuario;
          //  console.log('Auth Service Result: ', result)
            return result;
        }
        return null;
    }

    async login(user: any){
        console.log('Login Usuario: ', user)
        const payload = {nomUsuario: user.nomUsuario, sub: user.codUsuario};
        return {
            access_token: this.jwtService.sign(payload),
        }
    }
}

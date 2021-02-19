import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsuarioService } from 'src/usuario/usuario.service';

@Injectable()
export class AuthService {

    constructor(private usuarioService:UsuarioService,
        private jwtService: JwtService){}


    async validateUsuario(nomUsuario: string, senha: string): Promise<any>{
        const usuario = await  this.usuarioService.findByNome(nomUsuario);

        if(usuario && usuario.dscSenha === senha){
            const {codUsuario,dscLogin,nomUsuario} = usuario;

            return {codUsuario,nomUsuario,dscLogin};
        }
        return null;
    }

    async login(usuario: any){
        const payload = { nomUsuario: usuario.nomUsuario, sub: usuario.codUsuario};
        return{
            dscTokenAcesso: this.jwtService.sign(payload)
        }
    }
}

import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport";
import { AuthService } from "./auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
    constructor(private authService:AuthService){
        super({
            usernameField: 'nomUsuario',
            passwordField: 'dscSenha',
        });
    }

    async validate( nomUsuario: string, senha: string): Promise<any>{
        const usuario = await this.authService.validateUsuario(nomUsuario,senha);
        if(!usuario){
            throw new UnauthorizedException();
        }
        return usuario;
    }
}
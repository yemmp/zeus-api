import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "./auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
    constructor(private authService: AuthService){
        super({
            usernameField: 'dscLogin',
            passwordField: 'dscSenha'
        });
    }

    async validate(username: string, password: string): Promise<any>{
        const usuario = await this.authService.validateUser(username,password);
       // console.log('Local Strategy Usuario : ', usuario)
        if(!usuario){
            throw new UnauthorizedException();
        }

        return usuario;
    }
}
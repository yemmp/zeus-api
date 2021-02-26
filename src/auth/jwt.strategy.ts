import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { UsuarioService } from "src/usuario/usuario.service";
import { jwtConstants } from "./constants";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){

    constructor(private usuarioService: UsuarioService){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: jwtConstants.secret,
        })
    }

    async validate(payload: any){
        console.log("Payload JWT ", payload);
        
        let user = await this.usuarioService.findOne('WEB',payload.sub);
        console.log('Log Cod Concessionaria JWT STRATEGY: ',user.codConcessionaria, user.concessionaria.codRegiao);

        return {userId: payload.sub, dscLogin: payload.nomUsuario};
    }

}
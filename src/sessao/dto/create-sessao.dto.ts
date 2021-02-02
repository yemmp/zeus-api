import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { IsIP } from "sequelize-typescript";

export class CreateSessaoDto {

    @IsNotEmpty()
    @IsNumber()
    codUsuario: number;

    @IsNotEmpty()
    @IsString()
    dscTokenAcesso: string;

    @IsNotEmpty()
    @IsString()
    codIpOrigem: string;
    
    @IsNotEmpty()
    @IsString()
    dscSoAcesso: string;
}

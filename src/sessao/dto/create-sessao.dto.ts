import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateSessaoDto {

    @IsNotEmpty()
    @IsNumber()
    codUsuario: number;

    @IsNotEmpty()
    @IsString()
    dscTokenAcesso: string;

    @IsNotEmpty()
    @IsNumber()
    codIpOrigem: number;
    
    @IsNotEmpty()
    @IsString()
    dscSoAcesso: string;
}

import { IsByteLength, IsDate, IsIP, IsNotEmpty, IsNumber, IsString } from "class-validator";


export class CreateSessaoDto {

    @IsNotEmpty()
    @IsNumber()
    codUsuario: number;
    
    @IsNotEmpty()
    @IsDate()
    datInicio: Date;
    
    
    @IsDate()
    datFim: Date;

    @IsNotEmpty()
    @IsString()
    @IsByteLength(1,50)
    dscTokenAcesso: string;

    @IsNotEmpty()
    @IsString()
    @IsByteLength(1,50)
    @IsIP()
    codIpOrigem: string;
    
    @IsNotEmpty()
    @IsString()
    @IsByteLength(1,50)
    dscSoAcesso: string;
}

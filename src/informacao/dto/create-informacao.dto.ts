import { IsByteLength, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateInformacaoDto {
    
    @IsNotEmpty()
    @IsString()
    @IsByteLength(1,100)
    nomInformacao: string
    
    
    @IsString()
    @IsByteLength(1,500)
    dscInformacao: string
    
    @IsNotEmpty()
    @IsNumber()
    codConcessionaria: number;
    
    @IsNotEmpty()
    @IsNumber()
    codUsuarioCriacao: number;
}

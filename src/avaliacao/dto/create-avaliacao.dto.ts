import { IsByteLength, IsNotEmpty, IsString } from "class-validator";

export class CreateAvaliacaoDto {

    @IsNotEmpty()
    @IsString()
    @IsByteLength(1,100)
    nomAvaliacao: string;
    
    
    @IsString()
    @IsByteLength(1,300)
    nomArquivo: string;
    
    @IsNotEmpty()
    @IsString()
    @IsByteLength(1,300)
    nomDiretorio: string;
}

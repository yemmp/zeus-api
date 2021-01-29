import { IsNotEmpty, IsString } from "class-validator";

export class CreateAvaliacaoDto {

    @IsNotEmpty()
    @IsString()
    nomAvaliacao: string;
    
    @IsNotEmpty()
    @IsString()
    nomArquivo: string;
    
    @IsNotEmpty()
    @IsString()
    nomDiretorio: string;
}

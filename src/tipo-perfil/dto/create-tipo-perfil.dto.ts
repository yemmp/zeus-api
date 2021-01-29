import { IsNotEmpty, IsString } from "class-validator";

export class CreateTipoPerfilDto {

    @IsString()
    codPerfil: string;
    
    @IsNotEmpty()
    @IsString()
    nomPerfil: string;
}

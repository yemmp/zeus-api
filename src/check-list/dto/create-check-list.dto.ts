import { IsByteLength, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateCheckListDto {

    @IsNotEmpty()
    @IsNumber()
    codConcessionaria: number;

    @IsNotEmpty()
    @IsString()
    @IsByteLength(1,1)
    indAtivo: string;

    @IsNumber()
    codUsuarioCriacao: number;
}

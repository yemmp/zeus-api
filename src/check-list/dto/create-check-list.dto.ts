import { ApiProperty } from "@nestjs/swagger";
import { IsByteLength, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateCheckListDto {
    @ApiProperty({
        example:'Checklist Fulano',
        description:'Nome CheckList'
    })
    @IsNotEmpty()
    @IsString()
    nomChecklist: string;

    @ApiProperty({
        example:'2',
        description:'Número do índice da concessionaria a qual check-list está atrelado.',
    })
    @IsNotEmpty()
    @IsNumber()
    codConcessionaria: number;

    @ApiProperty({
        example:'S',
        description:'Indica se a check-list está ativo ou não, sendo utilzado "S" para Ativo e "N" para Inativo.',
    })
    @IsNotEmpty()
    @IsString()
    @IsByteLength(1,1)
    indAtivo: string;

    @ApiProperty({
        example:'2',
        description:'Número do índice do usuário que criou a check-list.',
    })
    @IsNumber()
    codUsuarioCriacao: number;
}

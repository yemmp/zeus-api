import { ApiProperty } from '@nestjs/swagger';
import {Table, Model, Column, PrimaryKey, AutoIncrement} from 'sequelize-typescript'

@Table({
    underscored: true,
    tableName: 'avaliacao'
})
export class Avaliacao extends Model{

    @ApiProperty()
    @PrimaryKey
    @AutoIncrement
    @Column
    codAvaliacao: number
    
    @ApiProperty()
    @Column
    nomAvaliacao: string;

    @ApiProperty()
    @Column
    nomArquivo: string;

    @ApiProperty()
    @Column
    nomDiretorio: string;
}

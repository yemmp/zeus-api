import { ApiProperty } from '@nestjs/swagger';
import { Table, Model, Column, PrimaryKey, AutoIncrement } from 'sequelize-typescript'

@Table({
    underscored: true,
    tableName: 'avaliacao',
    createdAt: 'datCriacao',
    updatedAt: 'datAtualizacao',
    deletedAt: 'datExclusao'
})
export class Avaliacao extends Model {

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
    dscIdioma: string;

    @ApiProperty()
    @Column
    dscPergunta1: string;

    @ApiProperty()
    @Column
    dscPergunta2: string;

    @ApiProperty()
    @Column
    nomArquivo: string;

}

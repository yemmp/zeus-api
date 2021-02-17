import { ApiProperty } from '@nestjs/swagger';
import { Table, Model, Column, PrimaryKey, AutoIncrement } from 'sequelize-typescript'

const { DataTypes } = require("sequelize");

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
    @Column({type:DataTypes.STRING(100)})
    nomAvaliacao: string;

    @ApiProperty()
    @Column({type:DataTypes.STRING(10)})
    dscIdioma: string;

    @ApiProperty()
    @Column({type:DataTypes.STRING(500)})
    dscPergunta1: string;

    @ApiProperty()
    @Column({type:DataTypes.STRING(500)})
    dscPergunta2: string;


}

import { ApiProperty } from "@nestjs/swagger";
import { BLOB } from "sequelize";
import { Table, Model, Column, PrimaryKey, AutoIncrement, HasMany } from "sequelize-typescript"
import { Atividade } from "src/atividade/entities/atividade.entity";

const { DataTypes } = require("sequelize");

@Table({
    underscored: true,
    tableName: 'midia',
    createdAt: 'datCriacao',
    updatedAt: 'datAtualizacao',
    deletedAt: 'datExclusao'
})
export class Midia extends Model {

    @ApiProperty()
    @PrimaryKey
    @AutoIncrement
    @Column
    codMidia: number;

    @ApiProperty()
    @Column({type:DataTypes.STRING(100)})
    nomMidia: string;

    @ApiProperty()
    @Column({type: DataTypes.STRING(500)})
    codTipoMidia: string;

    @ApiProperty()
    @Column({type: DataTypes.STRING(5)})
    nomArquivo: string;

    @ApiProperty()
    @Column({type: DataTypes.STRING(20)})
    nomDiretorio: string;

    @ApiProperty()
    @Column({type: DataTypes.STRING(1)})
    indAtivo: string;

    @ApiProperty()
    @Column
    codConcessionaria: number;

    @ApiProperty()
    @Column
    codUsuarioCriacao: number;

    @ApiProperty()
    @Column
    dscEncoding: string

    @ApiProperty()
    @Column
    numTamanhoArquivo: string

    @ApiProperty()
    @Column(BLOB("long"))
    dscConteudoArquivo: any

    @HasMany(() => Atividade)
    atividade: Atividade[];

}

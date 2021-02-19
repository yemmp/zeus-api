import { ApiProperty } from "@nestjs/swagger";
import { Table, Column, Model, PrimaryKey, AutoIncrement, ForeignKey, BelongsTo, DataType } from "sequelize-typescript";
import { Trajeto } from "src/trajeto/entities/trajeto.entity";

const { DataTypes } = require("sequelize");

@Table({
    underscored: true,
    tableName: 'ponto_trajeto',
    createdAt: 'datCriacao',
    updatedAt: 'datAtualizacao',
    deletedAt: 'datExclusao'
})
export class PontoTrajeto extends Model {

    @ApiProperty()
    @PrimaryKey
    @AutoIncrement
    @Column
    codPontoTrajeto: number;

    @ApiProperty()
    @Column({type:DataTypes.STRING(50)})
    nomPontoTrajeto: string;

    @ApiProperty()
    @ForeignKey(() => Trajeto)
    @Column
    codTrajeto: number;

    @BelongsTo(() => Trajeto)
    trajeto: Trajeto;

    @ApiProperty()
    @Column
    numSequencia: number;

    @ApiProperty()
    @Column(DataType.DOUBLE)
    numPosicaoX: number;

    @ApiProperty()
    @Column(DataType.DOUBLE)
    numPosicaoY: number;

    @ApiProperty()
    @Column
    codConcessionaria: number;

    @ApiProperty()
    @Column
    codUsuarioCriacao: number;

}

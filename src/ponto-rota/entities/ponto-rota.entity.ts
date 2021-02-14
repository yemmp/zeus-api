import { ApiProperty } from '@nestjs/swagger';
import { Table, Model, Column, PrimaryKey, ForeignKey, AutoIncrement, BelongsTo } from 'sequelize-typescript'
import { Icone } from 'src/icone/entities/icone.entity';
import { Rota } from 'src/rota/entities/rota.entity';

@Table({
    underscored: true,
    tableName: 'ponto_rota',
    createdAt: 'datCriacao',
    updatedAt: 'datAtualizacao',
    deletedAt: 'datExclusao'
})
export class PontoRota extends Model {

    @ApiProperty()
    @PrimaryKey
    @AutoIncrement
    @Column
    codPontoRota: number;

    @ApiProperty()
    @ForeignKey(() => Rota)
    @Column
    codRota: number;

    @BelongsTo(() => Rota)
    rota: Rota;

    @ApiProperty()
    @ForeignKey(() => Icone)
    @Column
    codIconeMidia: number;

    @BelongsTo(() => Icone)
    icone: Icone;

    @ApiProperty()
    @Column
    indIconeMidia: string;

    @ApiProperty()
    @Column
    numSequencia: number;

    @ApiProperty()
    @Column
    nomPontoRota: string;

    @ApiProperty()
    @Column
    dscTextoPontoRota: string;

    @ApiProperty()
    @Column
    numPosicaoX: number;

    @ApiProperty()
    @Column
    numPosicaoY: number;

    @ApiProperty()
    @Column
    codConcessionaria: number;

    @ApiProperty()
    @Column
    codUsuarioCriacao: number;

}

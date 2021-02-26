import { ApiProperty } from '@nestjs/swagger';
import {
  Table,
  Model,
  Column,
  PrimaryKey,
  ForeignKey,
  AutoIncrement,
  BelongsTo,
  DataType,
} from 'sequelize-typescript';
import { Midia } from 'src/midia/entities/midia.entity';
import { Rota } from 'src/rota/entities/rota.entity';

const { DataTypes } = require("sequelize");

@Table({
  underscored: true,
  tableName: 'ponto_rota',
  createdAt: 'datCriacao',
  updatedAt: 'datAtualizacao',
  deletedAt: 'datExclusao',
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
  @ForeignKey(() => Midia)
  @Column
  codMidia: number;

  @BelongsTo(() => Midia)
  Midia: Midia;

  @ApiProperty()
  @Column({type:DataTypes.STRING(1)})
  codTipoMidia: string;

  @ApiProperty()
  @Column
  numSequencia: number;

  @ApiProperty()
  @Column({type:DataTypes.STRING(100)})
  nomPontoRota: string;

  @ApiProperty()
  @Column({type:DataTypes.STRING(300)})
  dscTextoVisual: string;

  @ApiProperty()
  @Column({type:DataTypes.STRING(500)})
  dscTextoNarrado: string;

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

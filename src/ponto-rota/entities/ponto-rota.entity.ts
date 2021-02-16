import { ApiProperty } from '@nestjs/swagger';
import {
  Table,
  Model,
  Column,
  PrimaryKey,
  ForeignKey,
  AutoIncrement,
  BelongsTo,
} from 'sequelize-typescript';
import { Midia } from 'src/midia/entities/midia.entity';
import { Rota } from 'src/rota/entities/rota.entity';

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
  @Column
  codTipoMidia: string;

  @ApiProperty()
  @Column
  numSequencia: number;

  @ApiProperty()
  @Column
  nomPontoRota: string;

  @ApiProperty()
  @Column
  dscTextoVisual: string;

  @ApiProperty()
  @Column
  dscTextoNarrado: string;

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

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
import { Informacao } from 'src/informacao/entities/informacao.entity';
import { Midia } from 'src/midia/entities/midia.entity';

const { DataTypes } = require("sequelize");

@Table({
  underscored: true,
  tableName: 'atividade',
  createdAt: 'datCriacao',
  updatedAt: 'datAtualizacao',
  deletedAt: 'datExclusao',
})
export class Atividade extends Model {
  @ApiProperty()
  @PrimaryKey
  @AutoIncrement
  @Column
  codAtividade: number;

  @ApiProperty()
  @ForeignKey(() => Midia)
  @Column
  codMidia: number;

  @BelongsTo(() => Midia)
  midia: Midia;

  @ApiProperty()
  @Column
  numSequencia: number;

  @ApiProperty()
  @Column({type: DataTypes.STRING(100)})
  nomAtividade: string;

  @ApiProperty()
  @Column({type: DataTypes.STRING(40)})
  codTipoAtividade: string;

  @ApiProperty()
  @Column({type:DataTypes.STRING(300)})
  dscTextoVisual: string;

  @ApiProperty()
  @Column({type: DataTypes.STRING(500)})
  dscTextoNarrado: string;

  @ApiProperty()
  @Column
  codConcessionaria: number;

  @ApiProperty()
  @Column
  codUsuarioCriacao: number;

  @ForeignKey(() => Informacao)
  @ApiProperty()
  @Column
  codInformacao: number;
}

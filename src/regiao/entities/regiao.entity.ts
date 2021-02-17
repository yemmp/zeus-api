import { ApiProperty } from '@nestjs/swagger';
import {
  Table,
  Model,
  Column,
  PrimaryKey,
  AutoIncrement,
} from 'sequelize-typescript';

const { DataTypes } = require("sequelize");

@Table({
  underscored: true,
  tableName: 'regiao',
  createdAt: 'datCriacao',
  updatedAt: 'datAtualizacao',
  deletedAt: 'datExclusao',
})
export class Regiao extends Model {
  @PrimaryKey
  @AutoIncrement
  @ApiProperty()
  @Column
  codRegiao: number;

  @ApiProperty()
  @Column({type:DataTypes.STRING(50)})
  nomRegiao: string;

  @ApiProperty()
  @Column({type:DataTypes.STRING(300)})
  dscRegiao: string;

  @ApiProperty()
  @Column({type:DataTypes.STRING(1)})
  indAtivo: string;

  @ApiProperty()
  @Column
  codUsuarioCriacao: number;
}

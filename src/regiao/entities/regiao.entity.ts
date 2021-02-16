import { ApiProperty } from '@nestjs/swagger';
import {
  Table,
  Model,
  Column,
  PrimaryKey,
  AutoIncrement,
} from 'sequelize-typescript';

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
  @Column
  nomRegiao: string;

  @ApiProperty()
  @Column
  dscRegiao: string;

  @ApiProperty()
  @Column
  indAtivo: string;

  @ApiProperty()
  @Column
  codUsuarioCriacao: number;
}

import { ApiProperty } from '@nestjs/swagger';
import {
  Table,
  Model,
  Column,
  PrimaryKey,
  AutoIncrement,
  HasMany,
  ForeignKey,
  BelongsTo
} from 'sequelize-typescript';
import { DetalheChecklist } from 'src/detalhe-checklist/entities/detalhe-checklist.entity';
import { Experiencia } from 'src/experiencia/entities/experiencia.entity';

const { DataTypes } = require("sequelize");

@Table({
  underscored: true,
  tableName: 'check_list',
  createdAt: 'datCriacao',
  updatedAt: 'datAtualizacao',
  deletedAt: 'datExclusao',
})
export class CheckList extends Model {
  @ApiProperty()
  @PrimaryKey
  @AutoIncrement
  @Column
  codCheckList: number;

  @ApiProperty()
  @Column({type:DataTypes.STRING(50)})
  nomCheckList: string;

  @ApiProperty()
  @Column({type:DataTypes.STRING(1)})
  indAtivo: string;

  @ApiProperty()
  @Column
  codConcessionaria: number;

  @ApiProperty()
  @Column
  codUsuarioCriacao: number;

  @HasMany(() => Experiencia)
  experiencia: Experiencia[];

  @HasMany(()=> DetalheChecklist)
  detalhesCheckList: DetalheChecklist[];
}

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
import { Experiencia } from 'src/experiencia/entities/experiencia.entity';
import { Regiao } from 'src/regiao/entities/regiao.entity';

@Table({
  underscored: true,
  tableName: 'check list',
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
  @Column
  indAtivo: string;

  @ApiProperty()
  @Column
  codConcessionaria: number;

  @ApiProperty()
  @Column
  codUsuarioCriacao: number;

  @HasMany(() => Experiencia)
  experiencia: Experiencia[];
}

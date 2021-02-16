import { ApiProperty } from '@nestjs/swagger';
import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  ForeignKey,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';
import { CheckList } from 'src/check-list/entities/check-list.entity';
import { FaseExperiencia } from 'src/fase-experiencia/entities/fase-experiencia.entity';

@Table({
  underscored: true,
  tableName: 'experiencia',
  createdAt: 'datCriacao',
  updatedAt: 'datAtualizacao',
  deletedAt: 'datExclusao',
})
export class Experiencia extends Model {
  @ApiProperty()
  @PrimaryKey
  @AutoIncrement
  @Column
  codExperiencia: number;

  @ApiProperty()
  @Column
  nomExperiencia: string;

  @ApiProperty()
  @ForeignKey(() => CheckList)
  @Column
  codCheckList: number;

  @BelongsTo(() => CheckList)
  checkList: CheckList;

  @ApiProperty()
  @Column
  codFaseAvancada: number;

  @ApiProperty()
  @Column
  indAtivo: string;

  @ApiProperty()
  @Column
  codConcessionaria: number;

  @ApiProperty()
  @Column
  codUsuarioCriacao: number;

  @HasMany(() => FaseExperiencia)
  faseExperiencia: FaseExperiencia[];
}

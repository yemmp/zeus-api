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
//import { FaseExperiencia } from 'src/fase-experiencia/entities/fase-experiencia.entity';
import { Midia } from 'src/midia/entities/midia.entity';

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

  /*
@ForeignKey(()=>FaseExperiencia)
*/
  @ApiProperty()
  @Column
  codFase: number;

  /*
@BelongsTo(()=>FaseExperiencia)
faseExperiencia: FaseExperiencia;
*/
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
  @Column
  nomAtividade: string;

  @ApiProperty()
  @Column
  codTipoAtividade: string;

  @ApiProperty()
  @Column
  dscTextoVisual: string;

  @ApiProperty()
  @Column
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

import { ApiProperty } from '@nestjs/swagger';
import {
  Table,
  Model,
  Column,
  PrimaryKey,
  AutoIncrement,
  ForeignKey,
  HasOne,
  BelongsTo,
} from 'sequelize-typescript';
import { Dispositivo } from 'src/dispositivo/entities/dispositivo.entity';
import { Formulario } from 'src/formulario/entities/formulario.entity';

@Table({
  underscored: true,
  tableName: 'test_drive',
  createdAt: 'datCriacao',
  updatedAt: 'datAtualizacao',
  deletedAt: 'datExclusao',
})
export class TestDrive extends Model {
  @ApiProperty()
  @PrimaryKey
  @AutoIncrement
  @Column
  codTestDrive: number;

  @ForeignKey(()=>Formulario)
  @Column
  codFormulario: number;
  @BelongsTo(()=>Formulario)
  formulario:Formulario;

  @ForeignKey(()=>Dispositivo)
  @Column
  codDispositivo: number;
  @BelongsTo(()=>Dispositivo)
  dispositivo: Dispositivo;

  @ApiProperty()
  @Column
  datAgendamento: Date;
  
  @ApiProperty()
  @Column
  codStatusTestDrive: string;
  @ApiProperty()
  @Column
  numKmInicial: number;
  
  @ApiProperty()
  @Column
  numKmFinal: number;
  
  @ApiProperty()
  @Column
  codVoucher: string;

  
  @ApiProperty()
  @Column
  datSaida: Date;

  @ApiProperty()
  @Column
  datRetorno: Date;

  @ApiProperty()
  @Column
  dscResposta1: string
  
  @ApiProperty()
  @Column
  dscResposta2: string

  @ApiProperty()
  @Column
  codRegiao:number;

  @ApiProperty()
  @Column
  codConcessionaria: number;

  @ApiProperty()
  @Column
  codUsuarioCriacao: number;
}

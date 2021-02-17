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

const { DataTypes } = require("sequelize");

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
  @Column({type:DataTypes.STRING(10)})
  codStatusTestDrive: string;
  @ApiProperty()
  @Column
  numKmInicial: number;
  
  @ApiProperty()
  @Column
  numKmFinal: number;
  
  @ApiProperty()
  @Column({type:DataTypes.STRING(4)})
  codVoucher: string;

  
  @ApiProperty()
  @Column
  datSaida: Date;

  @ApiProperty()
  @Column
  datRetorno: Date;

  @ApiProperty()
  @Column({type:DataTypes.STRING(10)})
  dscResposta1: string
  
  @ApiProperty()
  @Column({type:DataTypes.STRING(10)})
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

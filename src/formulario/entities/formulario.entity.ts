import { ApiProperty } from '@nestjs/swagger';
import { BLOB } from 'sequelize';
import {
  Model,
  Table,
  Column,
  PrimaryKey,
  ForeignKey,
  AutoIncrement,
  BelongsTo,
} from 'sequelize-typescript';

const { DataTypes } = require("sequelize");

@Table({
  underscored: true,
  tableName: 'formulario',
  createdAt: 'datCriacao',
  updatedAt: 'datAtualizacao',
  deletedAt: 'datExclusao',
})
export class Formulario extends Model {
  static findByQuery(arg0: { attributes: { exclude: string[]; }; where: {}; }) {
    throw new Error('Method not implemented.');
  }
  
 
  @ApiProperty()
  @PrimaryKey
  @AutoIncrement
  @Column
  codFormulario: number;

  @ApiProperty()
  @Column(DataTypes.STRING(300))
  nomCliente: string;

  @ApiProperty()
  @Column(DataTypes.STRING(40))
  numTelefone: string;

  @ApiProperty()
  @Column(DataTypes.STRING(300))
  dscEmail: string;

  @ApiProperty()
  @Column(DataTypes.STRING(40))
  dscRg: string;

  @ApiProperty()
  @Column(DataTypes.STRING(40))
  numCelular: string;

  @ApiProperty()
  @Column(DataTypes.STRING(20))
  numCpf: string;

  @ApiProperty()
  @Column(DataTypes.STRING(40))
  numCnh: string;

  @ApiProperty()
  @Column(BLOB("long"))
  dscFotoCnh: any;

  @ApiProperty()
  @Column(DataTypes.STRING(20))
  codSexo: string;

  @ApiProperty()
  @Column
  datNascimento: Date;

  @ApiProperty()
  @Column
  datValidadeCnh: Date;

  @ApiProperty()
  @Column
  datUltimoAcesso: Date;

  @ApiProperty()
  @Column
  codConcessionaria: number;

  @ApiProperty()
  @Column
  codUsuarioCriacao: number;
  
}

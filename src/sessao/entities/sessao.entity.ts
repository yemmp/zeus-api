import { ApiProperty } from '@nestjs/swagger';
import { Table, Model, PrimaryKey, Column, AutoIncrement, ForeignKey, BelongsTo } from 'sequelize-typescript'
import { Usuario } from 'src/usuario/entities/usuario.entity';

const { DataTypes } = require("sequelize");
@Table({
    underscored: true,
    tableName: 'sessao',  
    createdAt: 'datCriacao',
    updatedAt: 'datAtualizacao',
    deletedAt: 'datExclusao'
})
export class Sessao extends  Model{

  @ApiProperty()
    @PrimaryKey
    @AutoIncrement
    @Column
      codSessao: number;
 
    @ApiProperty()
    @ForeignKey(()=>Usuario)
    @Column
      codUsuario: number;

    @ApiProperty()
    @BelongsTo(()=>Usuario)
    usuario: Usuario

    @ApiProperty()
    @Column
    datInicio: Date;

    @ApiProperty()
    @Column
    datFim: Date;
 
    @ApiProperty()
    @Column({type:DataTypes.STRING(50)})
      dscTokenAcesso: string;
 
    @ApiProperty()
    @Column({type:DataTypes.STRING(50)})
      codIpOrigem: string;
 
    @ApiProperty()
    @Column({type:DataTypes.STRING(50)})
      dscSoAcesso: string;

}

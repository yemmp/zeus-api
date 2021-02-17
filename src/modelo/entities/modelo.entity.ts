import { ApiProperty } from '@nestjs/swagger';
import {Table,Model,Column,PrimaryKey,AutoIncrement} from 'sequelize-typescript';

const { DataTypes } = require("sequelize");

@Table({
    underscored: true,
    tableName: 'Modelo',
    createdAt: 'datCriacao',
    updatedAt: 'datAtualizacao',
    deletedAt: 'datExclusao'
})
export class Modelo extends Model{

    @ApiProperty()
    @PrimaryKey
    @AutoIncrement
    @Column
    codModelo: number;
    
    @ApiProperty()
    @Column({type: DataTypes.STRING(20)})
    nomModelo: string;
    
    @ApiProperty()
    @Column({type: DataTypes.STRING(100)})
    dscModelo: string;
    
    @ApiProperty()
    @Column({type: DataTypes.STRING(1)})
    indAtivo:string;
    
    @ApiProperty()
    @Column
    codUsuarioCriacao: number;



}

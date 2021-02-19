import { ApiProperty } from '@nestjs/swagger';
import {Table,Column,Model,PrimaryKey,AutoIncrement} from 'sequelize-typescript'

const { DataTypes } = require("sequelize");

@Table({
    underscored:true,
    tableName: 'icone',  
    createdAt: 'datCriacao',
    updatedAt: 'datAtualizacao',
    deletedAt: 'datExclusao'
})
export class Icone extends Model{

    
    @ApiProperty()
    @PrimaryKey
    @AutoIncrement
    @Column
    codIcone: number;

    
    @ApiProperty()
    @Column({type:DataTypes.STRING(100)})
    nomIcone: string;

    
    @ApiProperty()
    @Column({type:DataTypes.STRING(500)})
    dscIcone: string;

    
    @ApiProperty()
    @Column({type:DataTypes.STRING(300)})
    nomArquivoImagem: string;
    
    @ApiProperty()
    @Column({type:DataTypes.STRING(300)})
    nomArquivoAudio: string;

        
    @ApiProperty()
    @Column({type:DataTypes.STRING(1)})
    indAtivo: string;

    
    @ApiProperty()
    @Column
    codUsuarioCriacao: number;
}

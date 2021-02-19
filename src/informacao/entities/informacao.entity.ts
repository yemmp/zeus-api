import { ApiProperty } from '@nestjs/swagger';
import {Table,Model,Column,PrimaryKey,AutoIncrement, HasMany} from 'sequelize-typescript'
import { Atividade } from 'src/atividade/entities/atividade.entity';

const { DataTypes } = require("sequelize");

@Table({
    underscored:true,
    tableName: 'informacao',  
    createdAt: 'datCriacao',
    updatedAt: 'datAtualizacao',
    deletedAt: 'datExclusao'
})
export class Informacao extends Model{
    
    @ApiProperty()
    @PrimaryKey
    @AutoIncrement
    @Column
    codInformacao: number;
    
    @ApiProperty()
    @Column({type: DataTypes.STRING(100)})
    nomInformacao: string;

    @ApiProperty()
    @Column({type: DataTypes.STRING(500)})
    dscInformacao: string;
    
    @ApiProperty()
    @Column({type: DataTypes.STRING(1)})
    indAtivo: string;

    @ApiProperty()
    @Column
    codConcessionaria: number;

    @ApiProperty()
    @Column
    codUsuarioCriacao: number;

    @HasMany(()=>Atividade)
    atividades: Atividade[];
}

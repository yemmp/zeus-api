import { ApiProperty } from '@nestjs/swagger';
import {Table,Model,Column,PrimaryKey,AutoIncrement,ForeignKey, BelongsTo, HasMany} from 'sequelize-typescript'
import { PontoRota } from 'src/ponto-rota/entities/ponto-rota.entity';
import { Trajeto } from 'src/trajeto/entities/trajeto.entity';

const { DataTypes } = require("sequelize");

@Table({
    underscored:true,
    tableName: 'rota',  
    createdAt: 'datCriacao',
    updatedAt: 'datAtualizacao',
    deletedAt: 'datExclusao'
})
export class Rota extends Model {

    @ApiProperty()
    @PrimaryKey
    @AutoIncrement
    @Column
    codRota:number;

    @ApiProperty()
    @ForeignKey(()=> Trajeto)
    @Column
    codTrajeto: number;

    @BelongsTo(()=>Trajeto)
    trajeto: Trajeto;

    
    @ApiProperty()
    @Column({type: DataTypes.STRING(100)})
    nomRota: string;
    
    @ApiProperty()
    @Column({type: DataTypes.STRING(1)})
    indAtivo: string;
    
    @ApiProperty()
    @Column
    codConcessionaria: number;
    
    @ApiProperty()
    @Column
    codUsuarioCriacao: number;
    
    @HasMany(()=>PontoRota)
    pontosRota : PontoRota[];
}

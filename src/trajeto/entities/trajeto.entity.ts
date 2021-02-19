import { ApiProperty } from '@nestjs/swagger';
import {Table,Model,Column,PrimaryKey,AutoIncrement, HasMany, ForeignKey, BelongsTo} from 'sequelize-typescript'
import { PontoTrajeto } from 'src/ponto-trajeto/entities/ponto-trajeto.entity';
import { Rota } from 'src/rota/entities/rota.entity';

const { DataTypes } = require("sequelize");

@Table({
    underscored: true,
    tableName: 'trajeto',  
    createdAt: 'datCriacao',
    updatedAt: 'datAtualizacao',
    deletedAt: 'datExclusao'
})
export class Trajeto  extends Model{

    @ApiProperty()
    @PrimaryKey
    @AutoIncrement
    @Column
    codTrajeto: number;

    @ApiProperty()
    @Column({type:DataTypes.STRING(100)})
    nomTrajeto: string;

    @ApiProperty()
    @Column({type:DataTypes.STRING(500)})
    dscTrajeto: string;

    @ApiProperty()
    @Column
    qtdPontos: number;
    
    
    @ApiProperty()
    @Column({type:DataTypes.STRING(1)})
    indAtivo: string;
    
    @ApiProperty()
    @Column
    codConcessionaria: number;
    
    @ApiProperty()
    @Column
    codUsuarioCriacao: number;
    
    @HasMany(()=>PontoTrajeto, {onDelete: 'cascade'})
    pontosTrajeto: PontoTrajeto[];

    @HasMany(()=>Rota)
    rota: Rota;
    
    
}

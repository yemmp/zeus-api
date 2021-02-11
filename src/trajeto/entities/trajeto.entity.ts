import { ApiProperty } from '@nestjs/swagger';
import {Table,Model,Column,PrimaryKey,AutoIncrement, HasMany, ForeignKey, BelongsTo} from 'sequelize-typescript'
import { PontoTrajeto } from 'src/ponto-trajeto/entities/ponto-trajeto.entity';
import { Rota } from 'src/rota/entities/rota.entity';


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
    @Column
    nomTrajeto: string;

    @ApiProperty()
    @Column
    dscTrajeto: string;

    @ApiProperty()
    @Column
    qtdPontos: number;
    
    
    @ApiProperty()
    @Column
    indAtivo: string;
    
    @ApiProperty()
    @Column
    codConcessionaria: number;
    
    @ApiProperty()
    @Column
    codUsuarioCriacao: number;
    
    @HasMany(()=>PontoTrajeto)
    pontosTrajeto: PontoTrajeto[];

    @HasMany(()=>Rota)
    rota: Rota;
    
    
}

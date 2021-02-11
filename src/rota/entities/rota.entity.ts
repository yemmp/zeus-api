import { ApiProperty } from '@nestjs/swagger';
import {Table,Model,Column,PrimaryKey,AutoIncrement,ForeignKey, BelongsTo, HasMany} from 'sequelize-typescript'
import { PontoRota } from 'src/ponto-rota/entities/ponto-rota.entity';
import { Trajeto } from 'src/trajeto/entities/trajeto.entity';


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

    //@HasMany(()=>PontoRota)
    //pontosRota : PontoRota[];

    @ApiProperty()
    @Column
    nomRota: string;

    @ApiProperty()
    @Column
    indAtivo: string;
    
    @ApiProperty()
    @Column
    codConcessionaria: number;

    @ApiProperty()
    @Column
    codUsuarioCriacao: number;
}

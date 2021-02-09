import { ApiProperty } from '@nestjs/swagger';
import {Table,Model,Column,PrimaryKey,AutoIncrement, HasMany, ForeignKey, BelongsTo} from 'sequelize-typescript'
import { PontoTrajeto } from 'src/ponto-trajeto/entities/ponto-trajeto.entity';


@Table({
    underscored: true,
    tableName: 'trajeto'
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

    //@HasMany(()=>PontoTrajeto)

   // pontosTrajeto: PontoTrajeto[];

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

import { ApiProperty } from "@nestjs/swagger";
import { Table,Column,Model,PrimaryKey,AutoIncrement,ForeignKey, BelongsTo} from "sequelize-typescript";
import { Trajeto } from "src/trajeto/entities/trajeto.entity";

@Table({
    underscored:true,
    tableName: 'ponto trajeto',  
    createdAt: 'datCriacao',
    updatedAt: 'datAtualizacao',
    deletedAt: 'datExclusao'
})
export class PontoTrajeto extends Model {

    @ApiProperty()
    @PrimaryKey
    @AutoIncrement
    @Column
    codPontoTrajeto: number;

    @ApiProperty()
    @ForeignKey(()=>Trajeto)
    @Column
    codTrajeto: number;

    @BelongsTo(()=>Trajeto)
    trajeto: Trajeto;

    @ApiProperty()
    @Column
    numSequencia: number;

    @ApiProperty()
    @Column
    numPosicaoX: number;

    @ApiProperty()
    @Column
    numPosicaoY: number;

    @ApiProperty()
    @Column
    codConcessionaria: number;

    @ApiProperty()
    @Column
    codUsuarioCriacao: number;

}

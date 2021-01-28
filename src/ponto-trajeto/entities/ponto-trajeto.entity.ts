import { Table,Column,Model,PrimaryKey,AutoIncrement,ForeignKey, BelongsTo} from "sequelize-typescript";
import { Trajeto } from "src/trajeto/entities/trajeto.entity";

@Table({
    underscored:true,
    tableName: 'ponto trajeto'
})
export class PontoTrajeto extends Model {

    @PrimaryKey
    @AutoIncrement
    @Column
    codPontoTrajeto: number;

    @ForeignKey(()=>Trajeto)
    @Column
    codTrajeto: number;

    @BelongsTo(()=>Trajeto)
    trajeto: Trajeto;

    @Column
    numSequencia: number;

    @Column
    numPosicaoX: number;

    @Column
    numPosicaoY: number;

    @Column
    codConcessionaria: number;

    @Column
    codUsuarioCriacao: number;

}

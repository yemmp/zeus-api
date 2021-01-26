import { Table,Column,Model,PrimaryKey,AutoIncrement,ForeignKey} from "sequelize-typescript";

@Table({
    underscored:true,
    tableName: 'ponto trajeto'
})
export class PontoTrajeto extends Model {

    @PrimaryKey
    @AutoIncrement
    @Column
    codPontoTrajeto: number;

    //codTrajeto Marcado como PF
    //Marcação para alteração futura
    @Column
    codTrajeto: number;

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

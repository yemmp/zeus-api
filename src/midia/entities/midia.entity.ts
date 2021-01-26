import {Table,Model,Column,PrimaryKey,ForeignKey,AutoIncrement} from "sequelize-typescript"
import { TipoMidia } from "src/tipo-midia/entities/tipo-midia.entity";

@Table({
    underscored:true,
    tableName:'midia'
})
export class Midia extends Model {

    @PrimaryKey
    @AutoIncrement
    @Column
    codMidia: number;

    @ForeignKey(()=>TipoMidia)
    @Column
    codTipoMidia: number;

    @Column
    nomMidia:string;

    @Column
    nomArquivo: string;

    @Column
    nomDiretorio: string;

    @Column
    indAtivo: number;

    @Column
    codConcessionaria: number;
    
    @Column
    codUsuarioCriacao: number;

    

}

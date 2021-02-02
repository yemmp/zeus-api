import {Table,Model,Column,PrimaryKey,ForeignKey,AutoIncrement, BelongsTo} from "sequelize-typescript"
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

    @BelongsTo(()=>TipoMidia)
    tipoMidia: TipoMidia;
    
    @Column
    nomMidia:string;

    @Column
    nomArquivo: string;

    @Column
    nomDiretorio: string;

    @Column
    indAtivo: boolean;

    @Column
    codConcessionaria: number;
    
    @Column
    codUsuarioCriacao: number;

    

}

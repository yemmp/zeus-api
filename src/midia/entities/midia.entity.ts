import {Table,Model,Column,PrimaryKey,ForeignKey,AutoIncrement, BelongsTo} from "sequelize-typescript"

@Table({
    underscored:true,
    tableName:'midia'
})
export class Midia extends Model {

    @PrimaryKey
    @AutoIncrement
    @Column
    codMidia: number;

    
    @Column
    codTipoMidia: number;
        
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

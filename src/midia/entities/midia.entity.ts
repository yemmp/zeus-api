import {Table,Model,Column,PrimaryKey,AutoIncrement} from "sequelize-typescript"

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
    nomMidia: string;
    
    @Column
    nomArquivo: string;

    @Column
    nomDiretorio: string;
    
    @Column
    codTipoMidia: string;
     
    @Column
    indAtivo: string;

    @Column
    codConcessionaria: number;
    
    @Column
    codUsuarioCriacao: number;

    

}

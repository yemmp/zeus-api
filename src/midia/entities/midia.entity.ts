import { Exclude } from "class-transformer";
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

    @Exclude()
    @Column
    nomMidia: string;
    
    @Column
    nomArquivo: string;
    
    @Exclude()
    @Column
    nomDiretorio: string;
    
    @Column
    codTipoMidia: string;
    
    @Exclude()
    @Column
    indAtivo: string;
    
    @Exclude()
    @Column
    codConcessionaria: number;
    
    @Exclude()
    @Column
    codUsuarioCriacao: number;

   // constructor(partial: Partial<Midia>) {
   //     Object.assign(this, partial);
    //  }
    
}

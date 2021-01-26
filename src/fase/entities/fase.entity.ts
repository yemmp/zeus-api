import {Table,Model,Column,PrimaryKey,ForeignKey,AutoIncrement} from 'sequelize-typescript'
import { TipoFase } from 'src/tipo-fase/entities/tipo-fase.entity';

@Table({
    underscored:true,
    tableName:"fase"
})
export class Fase extends Model{
  
    @PrimaryKey
    @AutoIncrement
    @Column
    codFase:number;

    @ForeignKey(()=>TipoFase)
    @Column
    codTipoFase: number;

    @Column
    nomeFase: string;

    @Column
    dscFase: string;

    @Column
    codConcessionaria: number;

    @Column
    codUsuarioCriacao: number;


}

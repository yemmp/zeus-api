import {Table,Model,Column,PrimaryKey,AutoIncrement,ForeignKey, BelongsTo} from 'sequelize-typescript'
import { Trajeto } from 'src/trajeto/entities/trajeto.entity';


@Table({
    underscored:true,
    tableName: 'rota'
})
export class Rota extends Model {

    @PrimaryKey
    @AutoIncrement
    @Column
    codRota:number;

    @ForeignKey(()=> Trajeto)
    @Column
    codTrajeto: number;

    @BelongsTo(()=>Trajeto)
    trajeto: Trajeto;

    @Column
    nomRota: string;

    @Column
    indAtivo: boolean;
    
    @Column
    codConcessionaria: number;

    @Column
    codUsuarioCriacao: number;
}

import {Table,Model,Column,PrimaryKey,ForeignKey,AutoIncrement} from 'sequelize-typescript'
import { Fase } from 'src/fase/entities/fase.entity';
import { Rota } from 'src/rota/entities/rota.entity';

@Table({
    underscored:true,
    tableName:'rota fase'
})
export class RotaFase extends Model{

    @PrimaryKey
    @AutoIncrement
    @Column
    codRotaFase: number;

    @ForeignKey(()=>Rota)
    @Column
    codRota: number;

    @ForeignKey(()=>Fase)
    @Column
    codFase: number;

    @Column
    numSequencia: number;

    @Column
    indAtivo: number;

    @Column
    codConcessionaria: number;

    @Column
    codUsuarioCriacao: number;
    
}

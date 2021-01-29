import  {Table,Column,Model,PrimaryKey,AutoIncrement,ForeignKey, BelongsTo} from 'sequelize-typescript'
import { Avaliacao } from 'src/avaliacao/entities/avaliacao.entity';
import { Dispositivo } from 'src/dispositivo/entities/dispositivo.entity';

@Table({
    underscored:true,
    tableName: 'avaliacao dispositivo'
})
export class AvaliacaoDispositivo extends Model{

    @PrimaryKey
    @AutoIncrement
    @Column
    codAvaliacaoDispositivo: number;

    @ForeignKey(()=> Dispositivo)
    @Column
    codDispositivo: number
    
    @BelongsTo(()=>Dispositivo)
    dispositivo: Dispositivo;
    
    @ForeignKey(()=> Avaliacao)
    @Column
    codAvaliacao: number;

    @BelongsTo(()=>Avaliacao)
    avaliacao: Avaliacao;
    
    @Column
    numNotaGostou: number;

    @Column
    numNotaIndica: number;
    
}

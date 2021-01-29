import {Table,Model,Column,PrimaryKey,ForeignKey,AutoIncrement, BelongsTo } from 'sequelize-typescript'
import { Experiencia } from 'src/experiencia/entities/experiencia.entity';
import { TipoFase } from 'src/tipo-fase/entities/tipo-fase.entity';


@Table({
    underscored:true,
    tableName: 'fase experiencia'
})
export class FaseExperiencia  extends Model{

    @PrimaryKey
    @AutoIncrement
    @Column
    codFaseExperiencia: number;
    
    @ForeignKey(()=>Experiencia)
    @Column
    codExperiencia: number;

    @BelongsTo(()=>Experiencia)
    experiencia: Experiencia;

    @ForeignKey(()=>TipoFase)
    @Column
    codTipoFase: number;

    @BelongsTo(()=>TipoFase)
    tipoFase: TipoFase;

    //@ForeignKey() codFase é um codObj, podendo ser uma key vinda de avaliacao, rota, informacao etc...
    @Column
    codFase: number;

    @Column
    numSequencia: number;

    @Column
    codConcessionaria: number;

    @Column
    codUsuarioCriacao: number;

}

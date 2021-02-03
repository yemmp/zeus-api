import {Table,Model,Column,PrimaryKey,ForeignKey,BelongsTo,AutoIncrement} from 'sequelize-typescript'
import { Dispositivo } from 'src/dispositivo/entities/dispositivo.entity';
import { Experiencia } from 'src/experiencia/entities/experiencia.entity';

@Table({
    underscored: true,
    tableName:'experiencia dispositivo'
})
export class ExperienciaDispositivo extends Model{

    @PrimaryKey
    @AutoIncrement
    @Column
    codExperienciaDispositivo: number;
    
    @ForeignKey(()=>Dispositivo)
    @Column
    codDispositivo: number;
    
    @BelongsTo(()=>Dispositivo)
    dispositivo: Dispositivo;
    
    @ForeignKey(()=>Experiencia)
    @Column
    codExperiencia:number;
    
    @BelongsTo(()=>Experiencia)
    experiencia: Experiencia;
    
    @Column
    codConcessionaria:number;
    
    @Column
    codUsuarioCriacao:number;
}

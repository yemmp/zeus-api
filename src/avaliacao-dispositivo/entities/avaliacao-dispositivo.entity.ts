import { ApiProperty } from '@nestjs/swagger';
import  {Table,Column,Model,PrimaryKey,AutoIncrement,ForeignKey, BelongsTo} from 'sequelize-typescript'
import { Avaliacao } from 'src/avaliacao/entities/avaliacao.entity';
import { Dispositivo } from 'src/dispositivo/entities/dispositivo.entity';
import { ExperienciaDispositivo } from 'src/experiencia-dispositivo/entities/experiencia-dispositivo.entity';

@Table({
    underscored:true,
    tableName: 'avaliacao_dispositivo',  
    createdAt: 'datCriacao',
    updatedAt: 'datAtualizacao',
    deletedAt: 'datExclusao'
})
export class AvaliacaoDispositivo extends Model{

    @ApiProperty()
    @PrimaryKey
    @AutoIncrement
    @Column
    codAvaliacaoDispositivo: number;

    @ApiProperty()
    @ForeignKey(()=> Dispositivo)
    @Column
    codDispositivo: number
    
    @BelongsTo(()=>Dispositivo)
    dispositivo: Dispositivo;
    
    @ApiProperty()
    @ForeignKey(()=> ExperienciaDispositivo)
    @Column
    codExperienciaDispositivo: number;

    @BelongsTo(()=>ExperienciaDispositivo)
    experienciaDispositivo: ExperienciaDispositivo;
    
    @ApiProperty()
    @ForeignKey(()=> Avaliacao)
    @Column
    codAvaliacao: number;

    @BelongsTo(()=>Avaliacao)
    avaliacao: Avaliacao;
    
    @ApiProperty()
    @Column
    numNotaGostou: number;

    @ApiProperty()
    @Column
    numNotaIndica: string;
    
}

import { ApiProperty } from '@nestjs/swagger';
import { Table, Model, Column, PrimaryKey, ForeignKey, AutoIncrement, BelongsTo } from 'sequelize-typescript'
import { Experiencia } from 'src/experiencia/entities/experiencia.entity';


@Table({
    underscored: true,
    tableName: 'fase_experiencia',
    createdAt: 'datCriacao',
    updatedAt: 'datAtualizacao',
    deletedAt: 'datExclusao'
})
export class FaseExperiencia extends Model {

    @ApiProperty()
    @PrimaryKey
    @AutoIncrement
    @Column
    codFaseExperiencia: number;

    @ApiProperty()
    @ForeignKey(() => Experiencia)
    @Column
    codExperiencia: number;

    @BelongsTo(() => Experiencia)
    experiencia: Experiencia;

    @ApiProperty()
    //@ForeignKey() codFase é um codObj, podendo ser uma key vinda de avaliacao, rota, informacao etc...
    @Column
    codFase: number;

    @ApiProperty()
    @Column
    codTipoFase: string;


    @ApiProperty()
    @Column
    numSequencia: number;

    @ApiProperty()
    @Column
    codConcessionaria: number;

    @ApiProperty()
    @Column
    codUsuarioCriacao: number;



}

import { ApiProperty } from '@nestjs/swagger';
import { Table, Model, Column, PrimaryKey, ForeignKey, BelongsTo, AutoIncrement } from 'sequelize-typescript'
import { Dispositivo } from 'src/dispositivo/entities/dispositivo.entity';
import { Experiencia } from 'src/experiencia/entities/experiencia.entity';

@Table({
    underscored: true,
    tableName: 'experiencia_dispositivo',
    createdAt: 'datCriacao',
    updatedAt: 'datAtualizacao',
    deletedAt: 'datExclusao'
})
export class ExperienciaDispositivo extends Model {

    @ApiProperty()
    @PrimaryKey
    @AutoIncrement
    @Column
    codExperienciaDispositivo: number;

    @ApiProperty()
    @ForeignKey(() => Dispositivo)
    @Column
    codDispositivo: number;

    @BelongsTo(() => Dispositivo)
    dispositivo: Dispositivo;

    @ApiProperty()
    @ForeignKey(() => Experiencia)
    @Column
    codExperiencia: number;

    @BelongsTo(() => Experiencia)
    experiencia: Experiencia;

    @ApiProperty()
    @Column
    codConcessionaria: number;

    @ApiProperty()
    @Column
    codUsuarioCriacao: number;
}

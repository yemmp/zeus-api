import { ApiProperty } from '@nestjs/swagger';
import { Table, Model, Column, PrimaryKey, AutoIncrement, ForeignKey, BelongsTo } from 'sequelize-typescript'
import { Veiculo } from 'src/veiculo/entities/veiculo.entity';

@Table({
    underscored: true,
    tableName: 'dispositivo',
    createdAt: 'datCriacao',
    updatedAt: 'datAtualizacao',
    deletedAt: 'datExclusao'
})
export class Dispositivo extends Model {

    @PrimaryKey
    @AutoIncrement
    @ApiProperty()
    @Column
    codDispositivo: number;

    @ApiProperty()
    @Column
    @ForeignKey(() => Veiculo)
    codVeiculo: number;
    
    @BelongsTo(() => Veiculo)
    veiculo: Veiculo;
    
    @ApiProperty()
    @Column
    codUsuarioSistema: string;
    
    @ApiProperty()
    @Column
    nomDispositivo: string;
    
    @ApiProperty()
    @Column
    dscIdioma: string;
    
    @ApiProperty()
    @Column
    indAtivo: string;
    
    @ApiProperty()
    @Column
    codConcessionaria: number;
    
    @ApiProperty()
    @Column
    codUsuarioCriacao: number;
}

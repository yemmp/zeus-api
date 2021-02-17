import { ApiProperty } from '@nestjs/swagger';
import { Table, Model, Column, PrimaryKey, AutoIncrement, ForeignKey, BelongsTo } from 'sequelize-typescript'
import { Veiculo } from 'src/veiculo/entities/veiculo.entity';

const { DataTypes } = require("sequelize");

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
    codUsuarioSistema: number;
    
    @ApiProperty()
    @Column({type:DataTypes.STRING(100)})
    nomDispositivo: string;
    
    @ApiProperty()
    @Column({type: DataTypes.STRING(10)})
    dscIdioma: string;
    
    @ApiProperty()
    @Column({type:DataTypes.STRING(1)})
    indAtivo: string;
    
    @ApiProperty()
    @Column
    codConcessionaria: number;
    
    @ApiProperty()
    @Column
    codUsuarioCriacao: number;
}

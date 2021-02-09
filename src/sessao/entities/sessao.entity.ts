import { ApiProperty } from '@nestjs/swagger';
import { Table, Model, PrimaryKey, Column, AutoIncrement, ForeignKey, BelongsTo } from 'sequelize-typescript'
import { underscoredIf } from 'sequelize/types/lib/utils'
import { Usuario } from 'src/usuario/entities/usuario.entity';

@Table({
    underscored: true,
    tableName: 'sessao'
})
export class Sessao extends  Model{

  @ApiProperty()
    @PrimaryKey
    @AutoIncrement
    @Column
      codSessao: number;
 
    @ApiProperty()
    @ForeignKey(()=>Usuario)
    @Column
      codUsuario: number;

    @ApiProperty()
    @BelongsTo(()=>Usuario)
    usuario: Usuario

    @ApiProperty()
    @Column
    datInicio: Date;

    @ApiProperty()
    @Column
    datFim: Date;
 
    @ApiProperty()
    @Column
      dscTokenAcesso: string;
 
    @ApiProperty()
    @Column
      codIpOrigem: string;
 
    @ApiProperty()
    @Column
      dscSoAcesso: string;

}

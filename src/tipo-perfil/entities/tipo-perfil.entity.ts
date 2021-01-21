import { Table, Model, PrimaryKey, Column, AutoIncrement } from 'sequelize-typescript'

@Table({ 
    underscored: true,
    tableName: 'tipo_perfil'
})
export class TipoPerfil extends Model {
   @PrimaryKey
   @AutoIncrement
   @Column
     codPerfil: number;
   @Column
     nomPerfil: string;
   @Column
     datCriacao: Date;
}

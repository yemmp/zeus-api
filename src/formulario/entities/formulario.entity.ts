import { Model,Table,Column,PrimaryKey,ForeignKey,AutoIncrement, BelongsTo } from "sequelize-typescript";
import { TestDrive } from "src/test-drive/entities/test-drive.entity";

@Table({
    underscored:true,
    tableName: 'formulario'
})
export class Formulario extends Model {

    @PrimaryKey
    @AutoIncrement
    @Column
    codFormulario:number;

    @ForeignKey(()=>TestDrive)
    @Column
    codTestDrive: number;

    @BelongsTo(()=>TestDrive)
    testDrive: TestDrive;

    @Column
    nomCliente: string;
    
    @Column
    numTelefone: string;

    @Column
    dscEmail:string;

    @Column
    dscRG: string;

    @Column
    numCelular: string;

    @Column
    numCPF: string;

    @Column
    numCNH: string;

    @Column
    datValidadeCNH: Date;

    @Column
    codConcessionaria: number;

    @Column
    codUsuarioCriacao: number;
    
}


import { ApiProperty } from "@nestjs/swagger";
import { Model,Table,Column,PrimaryKey,ForeignKey,AutoIncrement, BelongsTo } from "sequelize-typescript";
import { TestDrive } from "src/test-drive/entities/test-drive.entity";

@Table({
    underscored:true,
    tableName: 'formulario',  
    createdAt: 'dat_criacao',
    updatedAt: 'dat_atualizacao',
    deletedAt: 'dat_exclusao'
})
export class Formulario extends Model {

    @ApiProperty() 
    @PrimaryKey
    @AutoIncrement
    @Column
    codFormulario:number;

    @ApiProperty() 
    @ForeignKey(()=>TestDrive)
    @Column
    codTestDrive: number;

    @BelongsTo(()=>TestDrive)
    testDrive: TestDrive;

    @ApiProperty() 
    @Column
    nomCliente: string;
    
    @ApiProperty() 
    @Column
    numTelefone: string;

    @ApiProperty() 
    @Column
    dscEmail:string;

    @ApiProperty() 
    @Column
    dscRG: string;

    @ApiProperty() 
    @Column
    numCelular: string;

    @ApiProperty() 
    @Column
    numCPF: string;

    @ApiProperty() 
    @Column
    numCNH: string;

    @ApiProperty() 
    @Column
    datValidadeCNH: Date;

    @ApiProperty() 
    @Column
    codConcessionaria: number;

    @ApiProperty() 
    @Column
    codUsuarioCriacao: number;
    
}


import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Test } from '@nestjs/testing';
import { CreateTestDriveDto } from './dto/create-test-drive.dto';
import { UpdateTestDriveDto } from './dto/update-test-drive.dto';
import { TestDrive } from './entities/test-drive.entity';

@Injectable()
export class TestDriveService {
  constructor(@InjectModel(TestDrive)private testDriveModel: typeof TestDrive){}

  async create(createTestDriveDto: CreateTestDriveDto) {
    try {
      this.testDriveModel.create(createTestDriveDto);
    } catch (error) {
      console.error('Erro ao Criar Test-Drive',error.message);
      throw new BadRequestException();
    }
    return 'Test-Drive Criado com Sucesso!';
  }

  async findAll() {
    try {
      return this.testDriveModel.findAll();
      
    } catch (error) {
      console.error('Erro ao Buscar Test-Drive',error.message);
      throw new BadRequestException();
    }
  }

  async findOne(id: number) {
    try {
      this.testDriveModel.findOne({where:{codTestDrive:id}});
    } catch (error) {
      
      console.error(`Erro ao Buscar Test-Drive #${id}`,error.message);
      throw new BadRequestException();
    }
    
  }

  async update(id: number, updateTestDriveDto: UpdateTestDriveDto) {
    try {
      TestDrive.update(updateTestDriveDto,{where:{codTestDrive:id}}).then(()=>{
        console.log(`Test-Drive #${id} Atualizado com Sucesso!`);
      })
    } catch (error) {
      console.error(`Erro ao Atualizar Test-Drive #${id}`,error.message);
      throw new BadRequestException();

    }
    return `Test-Drive #${id} Atualizada com Sucesso!`;
  }

  async remove(id: number) {
    try {
      this.testDriveModel.destroy({where:{codTestDrive:id}});
    } catch (error) {
      console.error(`Erro ao Deletar Test-Drive #${id}`,error.message);
      throw new BadRequestException();
    }
    return `Test-Drive #${id} Deletado!`;
  }
}

import { HttpException, forwardRef, Inject, Injectable, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateFormularioDto } from 'src/formulario/dto/create-formulario.dto';
import { QueryFormularioDTO } from 'src/formulario/dto/query-formulario.dto';
import { FormularioService } from 'src/formulario/formulario.service';
import { CreateTestDriveDto } from './dto/create-test-drive.dto';
import { UpdateTestDriveDto } from './dto/update-test-drive.dto';
import { TestDrive } from './entities/test-drive.entity';

const EXCLUDED_APP_ATTRIBUTES = ['']
// inserção da placa do carro  vinculada durante login
@Injectable()
export class TestDriveService {
  constructor(@InjectModel(TestDrive) private testDriveModel: typeof TestDrive,
    private formularioService: FormularioService) { }

  async create(createTestDriveDto: CreateTestDriveDto) {
    try {
      let cliente = await this.formularioService.findByCpf_DataNascimento(createTestDriveDto.numCpf, createTestDriveDto.datNascimento);
      console.log('Find By Data Nascimento: ', cliente);

      if (cliente.lenght == 0) {

        throw new HttpException({
          status: HttpStatus.BAD_REQUEST,
          error: 'Cliente não encontrado!',
        }, HttpStatus.BAD_REQUEST)

      }

      await this.testDriveModel.create(createTestDriveDto);
      console.log('Test-Drive Criado com Sucesso!');
      return 'Test-Drive Criado com Sucesso!';
    } catch (error) {
      console.error('Erro ao Criar Test-Drive', error.message);
      // throw new HttpException(error, 'Cliente não encontrado.\nVerifique os dados inseridos.');
    }
  }

  async findAll(projecao = 'APP') {
    try {
      const exclude_attr = (projecao == 'APP') ? EXCLUDED_APP_ATTRIBUTES : []
      return this.testDriveModel.findAll({ attributes: { exclude: [...exclude_attr] } });

    } catch (error) {
      console.error('Erro ao Buscar Test-Drive', error.message);
      // throw new HttpException();
    }
  }

  async findOne(projecao, id: number) {
    try {
      const exclude_attr = (projecao == 'APP') ? EXCLUDED_APP_ATTRIBUTES : []
      this.testDriveModel.findOne({ attributes: { exclude: [...exclude_attr] }, where: { codTestDrive: id } });
    } catch (error) {

      console.error(`Erro ao Buscar Test-Drive #${id}`, error.message);
      //  throw new HttpException();
    }

  }

  async update(id: number, updateTestDriveDto: UpdateTestDriveDto) {
    try {
      TestDrive.update(updateTestDriveDto, { where: { codTestDrive: id } }).then(() => {
        console.log(`Test-Drive #${id} Atualizado com Sucesso!`);
      })
      return `Test-Drive #${id} Atualizada com Sucesso!`;
    } catch (error) {
      console.error(`Erro ao Atualizar Test-Drive #${id}`, error.message);
      //  throw new HttpException();

    }
  }

  async remove(id: number) {
    try {
      this.testDriveModel.destroy({ where: { codTestDrive: id } });
      return `Test-Drive #${id} Deletado!`;
    } catch (error) {
      console.error(`Erro ao Deletar Test-Drive #${id}`, error.message);
      //  throw new HttpException();
    }
  }
}

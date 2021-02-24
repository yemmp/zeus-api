import { HttpException, Injectable, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { FormularioService } from 'src/formulario/formulario.service';
import { CreateTestDriveDto } from './dto/create-test-drive.dto';
import { UpdateTestDriveDto } from './dto/update-test-drive.dto';
import { TestDrive } from './entities/test-drive.entity';

const EXCLUDED_APP_ATTRIBUTES = [''];
// inserção da placa do carro  vinculada durante login
@Injectable()
export class TestDriveService {
  constructor(
    @InjectModel(TestDrive) private testDriveModel: typeof TestDrive,
    private formularioService: FormularioService,
  ) {}

  async create(createTestDriveDto: CreateTestDriveDto) {
    try {
      let cpf =
        createTestDriveDto.numCpf.substr(0, 3) +
        '.' +
        createTestDriveDto.numCpf.substr(3, 4) +
        '%';

      createTestDriveDto.codConcessionaria = 1;
      createTestDriveDto.codRegiao = 1;
      createTestDriveDto.codDispositivo = 1;

      let cliente = await this.formularioService.findByCpf_DataNascimento(
        cpf,
        createTestDriveDto.datNascimento,
      );

      console.log('Find By Data Nascimento: ', cliente);
      //Validação dos dados
      if (!cliente) {
        console.log(
          'Cliente não encontrado!',
          cpf,
          createTestDriveDto.datNascimento,
        );
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error: 'Cliente não encontrado.Verifique os dados inseridos.',
          },
          HttpStatus.BAD_REQUEST,
        );
      }

      //console.log('cliente cod formulario', cliente.toJSON());

      createTestDriveDto.codFormulario = cliente.codFormulario;

      console.log(createTestDriveDto.codFormulario);

      let result = await this.testDriveModel.create(createTestDriveDto);
      console.log('Test-Drive Criado com Sucesso!');
      return `Codigo Test Drive #${result.codTestDrive}`;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      } else {
        console.error('Erro ao Criar Test-Drive', error.message);
      }
    }
  }

  async findAll(projecao = 'APP') {
    try {
      const exclude_attr = projecao == 'APP' ? EXCLUDED_APP_ATTRIBUTES : [];
      return this.testDriveModel.findAll({
        attributes: { exclude: [...exclude_attr] },
      });
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Erro ao buscar Test-Drive.',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async findOne(projecao, id: number) {
    try {
      const exclude_attr = projecao == 'APP' ? EXCLUDED_APP_ATTRIBUTES : [];
      this.testDriveModel.findOne({
        attributes: { exclude: [...exclude_attr] },
        where: { codTestDrive: id },
      });
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Erro ao buscar Test-Drive #${id}`,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async update(id: number, updateTestDriveDto: UpdateTestDriveDto) {
    try {
      TestDrive.update(updateTestDriveDto, {
        where: { codTestDrive: id },
      }).then(() => {
        console.log(`Test-Drive #${id} Atualizado com Sucesso!`);
      });
      return `Test-Drive #${id} Atualizada com Sucesso!`;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Erro ao Atualizar Test-Drive #${id}`,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async remove(id: number) {
    try {
      this.testDriveModel.destroy({ where: { codTestDrive: id } });
      return `Test-Drive #${id} Deletado!`;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Erro ao Deletar Test-Drive #${id}`,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}

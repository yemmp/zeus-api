import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import sequelize from 'sequelize';
import { CreateFormularioDto } from './dto/create-formulario.dto';
import { UpdateFormularioDto } from './dto/update-formulario.dto';
import { Formulario } from './entities/formulario.entity';

const EXCLUDED_APP_ATTRIBUTES = ['']

@Injectable()
export class FormularioService {

  constructor(@InjectModel(Formulario) private formularioModel: typeof Formulario) { }


  async create(createFormularioDto: CreateFormularioDto) {
    try {
      await this.formularioModel.create(createFormularioDto);
      console.log('Formulario Criado com Sucesso!');
      return 'Formulario Criado com Sucesso!';
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Erro ao criar Formulario`
        },
        HttpStatus.BAD_REQUEST,
        );
        
    }
  }

  async findAll(projecao = 'APP') {
    try {
      const exclude_attr = (projecao == 'APP') ? EXCLUDED_APP_ATTRIBUTES : []
      return this.formularioModel.findAll({ attributes: { exclude: [...exclude_attr] } });

    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Erro ao buscar Formularios`
        },
        HttpStatus.BAD_REQUEST,
        );
        
    }
  }

  async findOne(projecao = 'APP', id: number) {
    try {
      const exclude_attr = (projecao == 'APP') ? EXCLUDED_APP_ATTRIBUTES : []
      return this.formularioModel.findOne({ attributes: { exclude: [...exclude_attr] }, where: { codFormulario: id } });

    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Erro ao buscar Formula #${id}`
        },
        HttpStatus.BAD_REQUEST,
        );
        
    }
  }

  async findByCpf_DataNascimento(numCpf: string, datNascimento: string) {
    try {
      
      let [results, metadata] = await this.formularioModel.sequelize.query({
        query: "SELECT * from formulario where num_cpf like ? and date_format(dat_nascimento, \'%d%m\') like ?",
        values: [numCpf, datNascimento]
      }, { type: sequelize.QueryTypes.SELECT }
      )
      return results;
    } catch (error) {
      console.error('Erro', error.message);
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Erro ao buscar CPF e DATA_NASCIMENTO`
        },
        HttpStatus.BAD_REQUEST,
        );
        
    }
  }



  async update(id: number, updateFormularioDto: UpdateFormularioDto) {
    try {
      Formulario.update(updateFormularioDto, { where: { codFormulario: id } }).then(() => {
        console.log(`Formulario #${id} Atualizado com Sucesso!`);
        return `Formulario #${id} Atualizado com Sucesso!`;
      });
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Erro ao Atualizar Formulario #${id}`
        },
        HttpStatus.BAD_REQUEST,
        );
        
    }
  }

  remove(id: number) {
    try {
      this.formularioModel.destroy({ where: { codFormulario: id } });
      return `Formulario #${id} Deletado`;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Erro ao Deletar Formulario #${id}`
        },
        HttpStatus.BAD_REQUEST,
        );
        
    }
  }
}

import { BadRequestException, Injectable } from '@nestjs/common';
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
      console.error('Erro ao Criar Formulario', error.message);
      throw new BadRequestException();
    }
  }

  async findAll(projecao = 'APP') {
    try {
      const exclude_attr = (projecao == 'APP') ? EXCLUDED_APP_ATTRIBUTES : []
      return this.formularioModel.findAll({ attributes: { exclude: [...exclude_attr] } });

    } catch (error) {
      console.error('Erro ao Buscar Formularios', error.message);
      throw new BadRequestException();
    }
  }

  async findOne(projecao = 'APP', id: number) {
    try {
      const exclude_attr = (projecao == 'APP') ? EXCLUDED_APP_ATTRIBUTES : []
      return this.formularioModel.findOne({ attributes: { exclude: [...exclude_attr] }, where: { codFormulario: id } });

    } catch (error) {
      console.error(`Erro ao Buscar Formulario #${id}`, error.message);
      throw new BadRequestException();
    }
  }

  async findByQuery(projecao = 'APP', numCpf:string, datNascimento : string){
  try {
    //const exclude_attr = (projecao == 'APP') ? EXCLUDED_APP_ATTRIBUTES: [];
    let [results, metadata] = await this.formularioModel.sequelize.query({
      query: "SELECT * from formulario where num_cpf like ? and date_format(dat_nascimento, \'%d%m\' ) like ? ",
      values: [numCpf, datNascimento]
    },{
      type: sequelize.QueryTypes.SELECT
      
    })
    return results;
    
  } catch (error) {
    console.error('Erro ao buscar cliente', error.message);
    throw new BadRequestException();
    
  }

  }

  async update(id: number, updateFormularioDto: UpdateFormularioDto) {
    try {
      Formulario.update(updateFormularioDto, { where: { codFormulario: id } }).then(() => {
        console.log(`Formulario #${id} Atualizado com Sucesso!`);
        return `Formulario #${id} Atualizado com Sucesso!`;
      });
    } catch (error) {
      console.error(`Erro ao Atualizar Formulario #${id}`, error.message);
      throw new BadRequestException();
    }
  }

  remove(id: number) {
    try {
      this.formularioModel.destroy({ where: { codFormulario: id } });
      return `Formulario #${id} Deletado`;
    } catch (error) {
      console.error(`Erro ao Deletar Formulario #${id}`, error.message);
      throw new BadRequestException();
    }
  }
}

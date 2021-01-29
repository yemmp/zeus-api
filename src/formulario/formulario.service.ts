import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateFormularioDto } from './dto/create-formulario.dto';
import { UpdateFormularioDto } from './dto/update-formulario.dto';
import { Formulario } from './entities/formulario.entity';

@Injectable()
export class FormularioService {

  constructor(@InjectModel(Formulario)private formularioModel: typeof Formulario){}


  async create(createFormularioDto: CreateFormularioDto) {
    try {
      this.formularioModel.create(createFormularioDto);
    } catch (error) {
      console.error('Erro ao Criar Formulario',error.message);
      throw new BadRequestException();
    }
    return 'Formulario Criado com Sucesso!';
  }

  async findAll() {
    try {
      return this.formularioModel.findAll();
      
    } catch (error) {
      console.error('Erro ao Buscar Formularios',error.message);
      throw new BadRequestException();
    }
  }

  async findOne(id: number) {
    try {
      return this.formularioModel.findOne({where:{codFormulario:id}});
      
    } catch (error) {
      console.error(`Erro ao Buscar Formulario #${id}`,error.message);
      throw new BadRequestException();
    }
  }

  async update(id: number, updateFormularioDto: UpdateFormularioDto) {
    try {
      Formulario.update(updateFormularioDto,{where:{codFormulario:id}}).then(()=>{
        console.log(`Formulario #${id} Atualizado com Sucesso!`);
      });
    } catch (error) {
      console.error(`Erro ao Atualizar Formulario #${id}`,error.message);
      throw new BadRequestException();
    }
    return `Formulario #${id} Atualizado com Sucesso!`;
  }

  remove(id: number) {
    try {
      this.formularioModel.destroy({where:{codFormulario:id}});
    } catch (error) {
      console.error(`Erro ao Deletar Formulario #${id}`,error.message);
      throw new BadRequestException();
    }
    return `Formulario #${id} Deletado`;
  }
}

import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateConcessionariaDto } from './dto/create-concessionaria.dto';
import { UpdateConcessionariaDto } from './dto/update-concessionaria.dto';
import { Concessionaria } from './entities/concessionaria.entity';

const EXCLUDED_APP_ATTRIBUTES = ['datExclusao','datAtualizacao','datCriacao',]

@Injectable()
export class ConcessionariaService {
  constructor(@InjectModel(Concessionaria) private concessionariaModel: typeof Concessionaria) { }

  async create(createConcessionariaDto: CreateConcessionariaDto) {
    try {
      await this.concessionariaModel.create(createConcessionariaDto);
      console.log('Concessionaria Criada com Sucesso!');
      return 'Concessionaria Criada com Sucesso!';

    } catch (error) {

      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Erro ao Criar Concessionaria`
        },
        HttpStatus.BAD_REQUEST,
        );
        
    }
  }

  async findAll(projecao = 'APP') {
    try {
      const exclude_attr = (projecao == 'APP') ? EXCLUDED_APP_ATTRIBUTES : []

      return this.concessionariaModel.findAll({ attributes: { exclude: [...exclude_attr] } });

    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Erro ao buscar Concessionarias`
        },
        HttpStatus.BAD_REQUEST,
        );
        
    }

  }

  async findOne(projecao = 'APP', id: number) {
    try {
      const exclude_attr = (projecao == 'APP') ? EXCLUDED_APP_ATTRIBUTES : []

      return this.concessionariaModel.findOne({ attributes: { exclude: [...exclude_attr] }, where: { codConcessionaria: id } });;

    } catch (error) {

      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Erro ao buscar Concessionaria #${id}`
        },
        HttpStatus.BAD_REQUEST,
        );
        
    }
  }

  async update(id: number, updateConcessionariaDto: UpdateConcessionariaDto) {

    try {
      Concessionaria.update(updateConcessionariaDto, {
        where: { codConcessionaria: id }
      }).then(() =>
        console.log(`Concessionaria #${id} atualizada com sucesso!`));
      return `Concessionaria #${id} Atualizada com Sucesso!`;

    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Erro ao atualizar Concessionaria #${id}`
        },
        HttpStatus.BAD_REQUEST,
        );
        
    }
  }

  async remove(id: number) {
    try {
      const deleteConcessionaria = this.concessionariaModel.destroy({
        where: { codConcessionaria: id }
      });
      console.log(`Concessionaria #${id} Deletada! ${deleteConcessionaria} Registros Apagados!`);
      return `Concessionaria #${id} Deletada!`;
    } catch (error) {

      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Erro ao deletar concessionaria #${id}`
        },
        HttpStatus.BAD_REQUEST,
        );
        
    }
  }
}

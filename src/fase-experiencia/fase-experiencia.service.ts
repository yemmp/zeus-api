import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { where } from 'sequelize';
import { CreateFaseExperienciaDto } from './dto/create-fase-experiencia.dto';
import { UpdateFaseExperienciaDto } from './dto/update-fase-experiencia.dto';
import { FaseExperiencia } from './entities/fase-experiencia.entity';

const EXCLUDED_APP_ATTRIBUTES = ['datCriacao', 'datExclusao', 'codFaseExperiencia', 'codExperiencia', 'numSequencia', 'codConcessionaria', 'codUsuarioCriacao']

@Injectable()
export class FaseExperienciaService {

  constructor(@InjectModel(FaseExperiencia) private faseExperienciaModel: typeof FaseExperiencia) { }


  async create(createFaseExperienciaDto: CreateFaseExperienciaDto) {
    try {
      await this.faseExperienciaModel.create(createFaseExperienciaDto);
      console.log('Fase-Experiencia Criada com Sucesso');
      return 'Fase-Experiencia Criada com Sucesso';

    } catch (error) {
      console.error('Erro ao criar Fase-Experiencia', error.message);
      throw new BadRequestException();
    }
  }

  async findAll(projecao = 'APP') {
    try {
      const exclude_attr = (projecao == 'APP') ? EXCLUDED_APP_ATTRIBUTES : []

      return this.faseExperienciaModel.findAll({ attributes: { exclude: [...exclude_attr] } });

    } catch (error) {
      console.error('Erro ao Buscar Fase-Experiencia', error.message);
      throw new BadRequestException();
    }
  }

  async findOne(projecao = 'APP', id: number) {
    try {
      const exclude_attr = (projecao == 'APP') ? EXCLUDED_APP_ATTRIBUTES : []

      return this.faseExperienciaModel.findOne({ attributes: { exclude: [...exclude_attr] }, where: { codFaseExperiencia: id } })
    } catch (error) {
      console.error(`Erro ao Buscar Fase-Experiencia #${id}`, error.message);
      throw new BadRequestException();
    }

  }

  async update(id: number, updateFaseExperienciaDto: UpdateFaseExperienciaDto) {
    try {
      FaseExperiencia.update(updateFaseExperienciaDto, { where: { codFaseExperiencia: id } }).then(() => {
        console.log(`Fase-Experiencia  Atualizada com Sucesso`);
        return `Fase-Experiencia #${id} Atualizada com Sucesso!`;
      })
    } catch (error) {
      console.error(`Erro ao Aualizar Fase-Experiencia #${id}`)
      throw new BadRequestException();
    }
  }

  async remove(id: number) {
    try {
      this.faseExperienciaModel.destroy({ where: { codFaseExperiencia: id } });
      return `Fase-Experiencia #${id} Deletada`;
    } catch (error) {
      console.error(`Erro ao Deleter Fase-Experiencia #${id}`, error.message);
      throw new BadRequestException();
    }
  }
}

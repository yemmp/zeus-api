import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateExperienciaDispositivoDto } from './dto/create-experiencia-dispositivo.dto';
import { UpdateExperienciaDispositivoDto } from './dto/update-experiencia-dispositivo.dto';
import { ExperienciaDispositivo } from './entities/experiencia-dispositivo.entity';

const EXCLUDED_APP_ATTRIBUTES = ['']

@Injectable()
export class ExperienciaDispositivoService {

  constructor(@InjectModel(ExperienciaDispositivo) private experienciaDispositivoModel: typeof ExperienciaDispositivo) { }

  async create(createExperienciaDispositivoDto: CreateExperienciaDispositivoDto) {
    try {
      await this.experienciaDispositivoModel.create(createExperienciaDispositivoDto);
      console.log('Experiencia-Dispositivo Criada com Sucesso');
      return 'Experiencia-Dispositivo Criada com Sucesso';

    } catch (error) {
      console.error('Erro ao Criar Experiencia-Dispositivo', error.message);
      throw new BadRequestException();
    }
  }

  async findAll(projecao = 'APP') {

    try {
      const exclude_attr = (projecao == 'APP') ? EXCLUDED_APP_ATTRIBUTES : []
      return this.experienciaDispositivoModel.findAll({ attributes: { exclude: [...exclude_attr] } });

    } catch (error) {

      console.error('Erro ao Buscar Experiencia-Dispositivo', error.message);
      throw new BadRequestException();
    }
  }

  async findOne(projecao = 'APP', id: number) {
    try {
      const exclude_attr = (projecao == 'APP') ? EXCLUDED_APP_ATTRIBUTES : []
      return this.experienciaDispositivoModel.findOne({ attributes: { exclude: [...exclude_attr] }, where: { codExperienciaDispositivo: id } });
    } catch (error) {

      console.error(`Erro ao Buscar Experiencia-Dispositivo #${id}`, error.message);
      throw new BadRequestException()
    }
  }

  async update(id: number, updateExperienciaDispositivoDto: UpdateExperienciaDispositivoDto) {
    try {
      ExperienciaDispositivo.update(updateExperienciaDispositivoDto, { where: { codExperienciaDispositivo: id } }).then(() => {
        console.log(`Experiencia-Dispositivo #${id} Atualizada`);
        return `Experiencia-Dispositivo #${id} Atualizada`;
      })
    } catch (error) {

      console.error(`Erro ao Atualizar Experiencia-Dispositivo #${id}`, error.message);
      throw new BadRequestException()
    }
  }

  async remove(id: number) {
    try {
      this.experienciaDispositivoModel.destroy({ where: { codExperienciaDispositivo: id } });
      return `Experiencia-Dispositivo #${id} Deletada`;
    } catch (error) {
      console.error(`Erro ao Buscar Experiencia-Dispositivo #${id}`, error.message);
      throw new BadRequestException()

    }
  }
}

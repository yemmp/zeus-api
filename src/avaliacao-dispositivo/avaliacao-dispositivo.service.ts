import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateAvaliacaoDispositivoDto } from './dto/create-avaliacao-dispositivo.dto';
import { UpdateAvaliacaoDispositivoDto } from './dto/update-avaliacao-dispositivo.dto';
import { AvaliacaoDispositivo } from './entities/avaliacao-dispositivo.entity';

@Injectable()
export class AvaliacaoDispositivoService {
  
  constructor(@InjectModel(AvaliacaoDispositivo)private avaliacaoDispositivoModule: typeof AvaliacaoDispositivo){}

  async create(createAvaliacaoDispositivoDto: CreateAvaliacaoDispositivoDto) {
    try {
      this.avaliacaoDispositivoModule.create(createAvaliacaoDispositivoDto);
    } catch (error) {
      console.error('Erro ao Criar Avaliacao-Dispositvo',error.message);
      throw new BadRequestException();
    }
    return 'Avaliacao-Dispositivo Criada com Sucesso!';
  }

  async findAll() {
    try {
      return this.avaliacaoDispositivoModule.findAll();
      
    } catch (error) {
      console.error('Erro ao Buscar Avaliacoes-Dispositivo', error.message);
      throw new BadRequestException();
    }
  }

  async findOne(id: number) {
    try {
      return this.avaliacaoDispositivoModule.findOne({where:{codAvaliacaoDispositivo:id}});
      
    } catch (error) {
      console.error(`Erro ao Buscar Avaliacao-Dispositivo #${id}`,error.message);
      throw new BadRequestException();

    }
  }

  async update(id: number, updateAvaliacaoDispositivoDto: UpdateAvaliacaoDispositivoDto) {
    try {
      AvaliacaoDispositivo.update(updateAvaliacaoDispositivoDto,{where:{codAvaliacaoDispositivo:id}}).then(()=>{
        console.log(`Avaliacao-Dispositivo #${id} Atualizada com Sucesso!`);
      })
    } catch (error) {
      console.error(`Erro ao Atualizar Avaliacao-Dispositivo #${id}`,error.message);
      throw new BadRequestException();
    }
    
    return `Atualizacao-Dispositivo #${id} Atualizada com Sucesso!`;
  }

  async remove(id: number) {
    try {
      this.avaliacaoDispositivoModule.destroy({where:{codAvaliacaoDispositivo:id}});
    } catch (error) {
      console.error(`Erro ao Deletar Avaliacao-Dispositivo #${id}`,error.messsage);
      throw new BadRequestException();
    }
    return `Avaliacao-Dispositivo #${id} Deletada!`;
  }
}

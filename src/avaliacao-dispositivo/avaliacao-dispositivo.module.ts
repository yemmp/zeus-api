import { Module } from '@nestjs/common';
import { AvaliacaoDispositivoService } from './avaliacao-dispositivo.service';
import { AvaliacaoDispositivoController } from './avaliacao-dispositivo.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { AvaliacaoDispositivo } from './entities/avaliacao-dispositivo.entity';
import { Dispositivo } from 'src/dispositivo/entities/dispositivo.entity';
import { Avaliacao } from 'src/avaliacao/entities/avaliacao.entity';

@Module({
  controllers: [AvaliacaoDispositivoController],
  providers: [AvaliacaoDispositivoService],
  imports: [SequelizeModule.forFeature([AvaliacaoDispositivo]),Dispositivo,Avaliacao]
})
export class AvaliacaoDispositivoModule {}

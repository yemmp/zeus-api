import { Module } from '@nestjs/common';
import { ExperienciaDispositivoService } from './experiencia-dispositivo.service';
import { ExperienciaDispositivoController } from './experiencia-dispositivo.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { ExperienciaDispositivo } from './entities/experiencia-dispositivo.entity';
import { Dispositivo } from 'src/dispositivo/entities/dispositivo.entity';
import { Experiencia } from 'src/experiencia/entities/experiencia.entity';

@Module({
  controllers: [ExperienciaDispositivoController],
  providers: [ExperienciaDispositivoService],
  imports: [SequelizeModule.forFeature([ExperienciaDispositivo]),Dispositivo,Experiencia]
})
export class ExperienciaDispositivoModule {}

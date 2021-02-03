import { Module } from '@nestjs/common';
import { ExperienciaDispositivoService } from './experiencia-dispositivo.service';
import { ExperienciaDispositivoController } from './experiencia-dispositivo.controller';

@Module({
  controllers: [ExperienciaDispositivoController],
  providers: [ExperienciaDispositivoService]
})
export class ExperienciaDispositivoModule {}

import { Module } from '@nestjs/common';
import { AvaliacaoDispositivoService } from './avaliacao-dispositivo.service';
import { AvaliacaoDispositivoController } from './avaliacao-dispositivo.controller';

@Module({
  controllers: [AvaliacaoDispositivoController],
  providers: [AvaliacaoDispositivoService]
})
export class AvaliacaoDispositivoModule {}

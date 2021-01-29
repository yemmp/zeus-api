import { Module } from '@nestjs/common';
import { DispositivoService } from './dispositivo.service';
import { DispositivoController } from './dispositivo.controller';
import { AvaliacaoModule } from './avaliacao/avaliacao.module';

@Module({
  controllers: [DispositivoController],
  providers: [DispositivoService],
  imports: [AvaliacaoModule]
})
export class DispositivoModule {}

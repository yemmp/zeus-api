import { Module } from '@nestjs/common';
import { PontoRotaService } from './ponto-rota.service';
import { PontoRotaController } from './ponto-rota.controller';

@Module({
  controllers: [PontoRotaController],
  providers: [PontoRotaService]
})
export class PontoRotaModule {}

import { Module } from '@nestjs/common';
import { VeiculoService } from './veiculo.service';
import { VeiculoController } from './veiculo.controller';

@Module({
  controllers: [VeiculoController],
  providers: [VeiculoService]
})
export class VeiculoModule {}

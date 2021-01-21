import { Module } from '@nestjs/common';
import { ConcessionariaService } from './concessionaria.service';
import { ConcessionariaController } from './concessionaria.controller';

@Module({
  controllers: [ConcessionariaController],
  providers: [ConcessionariaService]
})
export class ConcessionariaModule {}

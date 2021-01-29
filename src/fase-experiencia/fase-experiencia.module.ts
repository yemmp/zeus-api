import { Module } from '@nestjs/common';
import { FaseExperienciaService } from './fase-experiencia.service';
import { FaseExperienciaController } from './fase-experiencia.controller';

@Module({
  controllers: [FaseExperienciaController],
  providers: [FaseExperienciaService]
})
export class FaseExperienciaModule {}

import { Module } from '@nestjs/common';
import { DetalheChecklistService } from './detalhe-checklist.service';
import { DetalheChecklistController } from './detalhe-checklist.controller';

@Module({
  controllers: [DetalheChecklistController],
  providers: [DetalheChecklistService]
})
export class DetalheChecklistModule {}

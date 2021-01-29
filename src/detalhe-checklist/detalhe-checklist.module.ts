import { Module } from '@nestjs/common';
import { DetalheChecklistService } from './detalhe-checklist.service';
import { DetalheChecklistController } from './detalhe-checklist.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { DetalheChecklist } from './entities/detalhe-checklist.entity';
import { CheckList } from 'src/check-list/entities/check-list.entity';

@Module({
  controllers: [DetalheChecklistController],
  providers: [DetalheChecklistService],
  imports: [SequelizeModule.forFeature([DetalheChecklist]), CheckList]
})
export class DetalheChecklistModule {}

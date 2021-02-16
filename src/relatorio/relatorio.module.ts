import { Module } from '@nestjs/common';
import { RelatorioService } from './relatorio.service';
import { RelatorioController } from './relatorio.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Relatorio } from './entities/relatorio.entity';

@Module({
  controllers: [RelatorioController],
  providers: [RelatorioService],
  imports:[SequelizeModule.forFeature([Relatorio])]
})
export class RelatorioModule {}

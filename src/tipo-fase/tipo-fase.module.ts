import { Module } from '@nestjs/common';
import { TipoFaseService } from './tipo-fase.service';
import { TipoFaseController } from './tipo-fase.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { TipoFase } from './entities/tipo-fase.entity';

@Module({
  controllers: [TipoFaseController],
  providers: [TipoFaseService],
  imports: [SequelizeModule.forFeature([TipoFase])]
})
export class TipoFaseModule {}

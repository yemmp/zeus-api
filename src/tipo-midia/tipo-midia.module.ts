import { Module } from '@nestjs/common';
import { TipoMidiaService } from './tipo-midia.service';
import { TipoMidiaController } from './tipo-midia.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { TipoMidia } from './entities/tipo-midia.entity';

@Module({
  controllers: [TipoMidiaController],
  providers: [TipoMidiaService],
  imports: [SequelizeModule.forFeature([TipoMidia])]
})
export class TipoMidiaModule {}

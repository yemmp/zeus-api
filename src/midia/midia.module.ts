import { Module } from '@nestjs/common';
import { MidiaService } from './midia.service';
import { MidiaController } from './midia.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Midia } from './entities/midia.entity';

@Module({
  controllers: [MidiaController],
  providers: [MidiaService],
  imports: [SequelizeModule.forFeature([Midia]),]
})
export class MidiaModule {}

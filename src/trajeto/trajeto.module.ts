import { Module } from '@nestjs/common';
import { TrajetoService } from './trajeto.service';
import { TrajetoController } from './trajeto.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Trajeto } from './entities/trajeto.entity';

@Module({
  controllers: [TrajetoController],
  providers: [TrajetoService],
  imports: [SequelizeModule.forFeature([Trajeto])]
})
export class TrajetoModule {}

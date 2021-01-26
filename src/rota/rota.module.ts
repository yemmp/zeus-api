import { Module } from '@nestjs/common';
import { RotaService } from './rota.service';
import { RotaController } from './rota.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Rota } from './entities/rota.entity';
import { Trajeto } from 'src/trajeto/entities/trajeto.entity';

@Module({
  controllers: [RotaController],
  providers: [RotaService],
  imports: [SequelizeModule.forFeature([Rota]),Trajeto]
})
export class RotaModule {}

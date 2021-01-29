import { Module } from '@nestjs/common';
import { DispositivoService } from './dispositivo.service';
import { DispositivoController } from './dispositivo.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Dispositivo } from './entities/dispositivo.entity';


@Module({
  controllers: [DispositivoController],
  providers: [DispositivoService],
  imports: [SequelizeModule.forFeature([Dispositivo])]
})
export class DispositivoModule {}

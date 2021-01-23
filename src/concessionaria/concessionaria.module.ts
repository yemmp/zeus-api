import { Module } from '@nestjs/common';
import { ConcessionariaService } from './concessionaria.service';
import { ConcessionariaController } from './concessionaria.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Concessionaria } from './entities/concessionaria.entity';

@Module({
  controllers: [ConcessionariaController],
  providers: [ConcessionariaService],
  imports: [SequelizeModule.forFeature([Concessionaria])],
})
export class ConcessionariaModule {}

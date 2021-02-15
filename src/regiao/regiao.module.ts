import { Module } from '@nestjs/common';
import { RegiaoService } from './regiao.service';
import { RegiaoController } from './regiao.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Regiao } from './entities/regiao.entity';

@Module({
  controllers: [RegiaoController],
  providers: [RegiaoService],
  imports:[SequelizeModule.forFeature([Regiao])]
})
export class RegiaoModule {}

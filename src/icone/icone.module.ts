import { Module } from '@nestjs/common';
import { IconeService } from './icone.service';
import { IconeController } from './icone.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Icone } from './entities/icone.entity';

@Module({
  controllers: [IconeController],
  providers: [IconeService],
  imports: [SequelizeModule.forFeature([Icone])]
})
export class IconeModule {}

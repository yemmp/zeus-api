import { Module } from '@nestjs/common';
import { CheckListService } from './check-list.service';
import { CheckListController } from './check-list.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { CheckList } from './entities/check-list.entity';

@Module({
  controllers: [CheckListController],
  providers: [CheckListService],
  imports: [SequelizeModule.forFeature([CheckList])]
})
export class CheckListModule {}

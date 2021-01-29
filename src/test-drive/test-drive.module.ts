import { Module } from '@nestjs/common';
import { TestDriveService } from './test-drive.service';
import { TestDriveController } from './test-drive.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { TestDrive } from './entities/test-drive.entity';

@Module({
  controllers: [TestDriveController],
  providers: [TestDriveService],
  imports: [SequelizeModule.forFeature([TestDrive])]
})
export class TestDriveModule {}

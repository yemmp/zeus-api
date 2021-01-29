import { Module } from '@nestjs/common';
import { TestDriveService } from './test-drive.service';
import { TestDriveController } from './test-drive.controller';

@Module({
  controllers: [TestDriveController],
  providers: [TestDriveService]
})
export class TestDriveModule {}

import { Test, TestingModule } from '@nestjs/testing';
import { TestDriveController } from './test-drive.controller';
import { TestDriveService } from './test-drive.service';

describe('TestDriveController', () => {
  let controller: TestDriveController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestDriveController],
      providers: [TestDriveService],
    }).compile();

    controller = module.get<TestDriveController>(TestDriveController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

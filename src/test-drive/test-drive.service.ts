import { Injectable } from '@nestjs/common';
import { CreateTestDriveDto } from './dto/create-test-drive.dto';
import { UpdateTestDriveDto } from './dto/update-test-drive.dto';

@Injectable()
export class TestDriveService {
  create(createTestDriveDto: CreateTestDriveDto) {
    return 'This action adds a new testDrive';
  }

  findAll() {
    return `This action returns all testDrive`;
  }

  findOne(id: number) {
    return `This action returns a #${id} testDrive`;
  }

  update(id: number, updateTestDriveDto: UpdateTestDriveDto) {
    return `This action updates a #${id} testDrive`;
  }

  remove(id: number) {
    return `This action removes a #${id} testDrive`;
  }
}

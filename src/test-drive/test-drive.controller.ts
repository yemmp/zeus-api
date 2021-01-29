import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { TestDriveService } from './test-drive.service';
import { CreateTestDriveDto } from './dto/create-test-drive.dto';
import { UpdateTestDriveDto } from './dto/update-test-drive.dto';

@Controller('test-drive')
export class TestDriveController {
  constructor(private readonly testDriveService: TestDriveService) {}

  @Post()
  create(@Body() createTestDriveDto: CreateTestDriveDto) {
    return this.testDriveService.create(createTestDriveDto);
  }

  @Get()
  findAll() {
    return this.testDriveService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.testDriveService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateTestDriveDto: UpdateTestDriveDto) {
    return this.testDriveService.update(+id, updateTestDriveDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testDriveService.remove(+id);
  }
}

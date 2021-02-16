import { Module } from '@nestjs/common';
import { createQueryObject } from './utils';
import { ZeusQueryDTO } from './zeus-query-dto';

@Module({
  providers: [ZeusQueryDTO]
})
export class CommonModule {}

import { Module } from '@nestjs/common';
import { ZeusQueryDTO } from './zeus-query-dto';

@Module({
  providers: [ZeusQueryDTO]
})
export class CommonModule {}

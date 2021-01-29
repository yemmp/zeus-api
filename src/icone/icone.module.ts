import { Module } from '@nestjs/common';
import { IconeService } from './icone.service';
import { IconeController } from './icone.controller';

@Module({
  controllers: [IconeController],
  providers: [IconeService]
})
export class IconeModule {}

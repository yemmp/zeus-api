import { Test, TestingModule } from '@nestjs/testing';
import { TipoFaseController } from './tipo-fase.controller';
import { TipoFaseService } from './tipo-fase.service';

describe('TipoFaseController', () => {
  let controller: TipoFaseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoFaseController],
      providers: [TipoFaseService],
    }).compile();

    controller = module.get<TipoFaseController>(TipoFaseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

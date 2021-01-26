import { Test, TestingModule } from '@nestjs/testing';
import { RotaFaseController } from './rota-fase.controller';
import { RotaFaseService } from './rota-fase.service';

describe('RotaFaseController', () => {
  let controller: RotaFaseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RotaFaseController],
      providers: [RotaFaseService],
    }).compile();

    controller = module.get<RotaFaseController>(RotaFaseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

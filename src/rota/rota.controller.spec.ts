import { Test, TestingModule } from '@nestjs/testing';
import { RotaController } from './rota.controller';
import { RotaService } from './rota.service';

describe('RotaController', () => {
  let controller: RotaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RotaController],
      providers: [RotaService],
    }).compile();

    controller = module.get<RotaController>(RotaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { TrajetoController } from './trajeto.controller';
import { TrajetoService } from './trajeto.service';

describe('TrajetoController', () => {
  let controller: TrajetoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TrajetoController],
      providers: [TrajetoService],
    }).compile();

    controller = module.get<TrajetoController>(TrajetoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

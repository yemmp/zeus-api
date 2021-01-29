import { Test, TestingModule } from '@nestjs/testing';
import { AvaliacaoDispositivoController } from './avaliacao-dispositivo.controller';
import { AvaliacaoDispositivoService } from './avaliacao-dispositivo.service';

describe('AvaliacaoDispositivoController', () => {
  let controller: AvaliacaoDispositivoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AvaliacaoDispositivoController],
      providers: [AvaliacaoDispositivoService],
    }).compile();

    controller = module.get<AvaliacaoDispositivoController>(AvaliacaoDispositivoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

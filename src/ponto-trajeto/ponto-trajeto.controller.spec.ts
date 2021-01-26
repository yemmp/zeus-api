import { Test, TestingModule } from '@nestjs/testing';
import { PontoTrajetoController } from './ponto-trajeto.controller';
import { PontoTrajetoService } from './ponto-trajeto.service';

describe('PontoTrajetoController', () => {
  let controller: PontoTrajetoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PontoTrajetoController],
      providers: [PontoTrajetoService],
    }).compile();

    controller = module.get<PontoTrajetoController>(PontoTrajetoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

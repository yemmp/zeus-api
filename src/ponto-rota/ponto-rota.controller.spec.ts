import { Test, TestingModule } from '@nestjs/testing';
import { PontoRotaController } from './ponto-rota.controller';
import { PontoRotaService } from './ponto-rota.service';

describe('PontoRotaController', () => {
  let controller: PontoRotaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PontoRotaController],
      providers: [PontoRotaService],
    }).compile();

    controller = module.get<PontoRotaController>(PontoRotaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

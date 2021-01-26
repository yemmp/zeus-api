import { Test, TestingModule } from '@nestjs/testing';
import { TipoMidiaController } from './tipo-midia.controller';
import { TipoMidiaService } from './tipo-midia.service';

describe('TipoMidiaController', () => {
  let controller: TipoMidiaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoMidiaController],
      providers: [TipoMidiaService],
    }).compile();

    controller = module.get<TipoMidiaController>(TipoMidiaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

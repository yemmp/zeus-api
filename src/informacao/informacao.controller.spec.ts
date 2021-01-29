import { Test, TestingModule } from '@nestjs/testing';
import { InformacaoController } from './informacao.controller';
import { InformacaoService } from './informacao.service';

describe('InformacaoController', () => {
  let controller: InformacaoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InformacaoController],
      providers: [InformacaoService],
    }).compile();

    controller = module.get<InformacaoController>(InformacaoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

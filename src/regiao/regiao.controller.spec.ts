import { Test, TestingModule } from '@nestjs/testing';
import { RegiaoController } from './regiao.controller';
import { RegiaoService } from './regiao.service';

describe('RegiaoController', () => {
  let controller: RegiaoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RegiaoController],
      providers: [RegiaoService],
    }).compile();

    controller = module.get<RegiaoController>(RegiaoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

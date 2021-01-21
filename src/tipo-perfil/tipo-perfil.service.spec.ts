import { Test, TestingModule } from '@nestjs/testing';
import { TipoPerfilService } from './tipo-perfil.service';

describe('TipoPerfilService', () => {
  let service: TipoPerfilService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipoPerfilService],
    }).compile();

    service = module.get<TipoPerfilService>(TipoPerfilService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

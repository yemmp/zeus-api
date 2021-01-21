import { Test, TestingModule } from '@nestjs/testing';
import { TipoPerfilController } from './tipo-perfil.controller';
import { TipoPerfilService } from './tipo-perfil.service';

describe('TipoPerfilController', () => {
  let controller: TipoPerfilController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoPerfilController],
      providers: [TipoPerfilService],
    }).compile();

    controller = module.get<TipoPerfilController>(TipoPerfilController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

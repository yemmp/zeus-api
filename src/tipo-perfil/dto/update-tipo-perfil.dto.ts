import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoPerfilDto } from './create-tipo-perfil.dto';

export class UpdateTipoPerfilDto extends PartialType(CreateTipoPerfilDto) {}

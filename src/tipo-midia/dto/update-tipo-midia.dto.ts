import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoMidiaDto } from './create-tipo-midia.dto';

export class UpdateTipoMidiaDto extends PartialType(CreateTipoMidiaDto) {}

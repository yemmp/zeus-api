import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoFaseDto } from './create-tipo-fase.dto';

export class UpdateTipoFaseDto extends PartialType(CreateTipoFaseDto) {}

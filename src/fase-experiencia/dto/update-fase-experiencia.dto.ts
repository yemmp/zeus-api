import { PartialType } from '@nestjs/mapped-types';
import { CreateFaseExperienciaDto } from './create-fase-experiencia.dto';

export class UpdateFaseExperienciaDto extends PartialType(CreateFaseExperienciaDto) {}

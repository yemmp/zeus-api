import { PartialType } from '@nestjs/mapped-types';
import { CreateExperienciaDispositivoDto } from './create-experiencia-dispositivo.dto';

export class UpdateExperienciaDispositivoDto extends PartialType(CreateExperienciaDispositivoDto) {}

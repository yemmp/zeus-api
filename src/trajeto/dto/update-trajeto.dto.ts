import { PartialType } from '@nestjs/mapped-types';
import { CreateTrajetoDto } from './create-trajeto.dto';

export class UpdateTrajetoDto extends PartialType(CreateTrajetoDto) {}

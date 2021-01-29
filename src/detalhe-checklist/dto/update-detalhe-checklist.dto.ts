import { PartialType } from '@nestjs/mapped-types';
import { CreateDetalheChecklistDto } from './create-detalhe-checklist.dto';

export class UpdateDetalheChecklistDto extends PartialType(CreateDetalheChecklistDto) {}

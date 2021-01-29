import { Injectable } from '@nestjs/common';
import { CreateIconeDto } from './dto/create-icone.dto';
import { UpdateIconeDto } from './dto/update-icone.dto';

@Injectable()
export class IconeService {
  create(createIconeDto: CreateIconeDto) {
    return 'This action adds a new icone';
  }

  findAll() {
    return `This action returns all icone`;
  }

  findOne(id: number) {
    return `This action returns a #${id} icone`;
  }

  update(id: number, updateIconeDto: UpdateIconeDto) {
    return `This action updates a #${id} icone`;
  }

  remove(id: number) {
    return `This action removes a #${id} icone`;
  }
}

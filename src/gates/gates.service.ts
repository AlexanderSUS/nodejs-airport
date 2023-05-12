import { Injectable } from '@nestjs/common';
import { CreateGateDto } from './dto/create-gate.dto';
import { UpdateGateDto } from './dto/update-gate.dto';
import { GatesRepository } from './gates.repository';

@Injectable()
export class GatesService {
  constructor(private readonly gatesRepository: GatesRepository) {}

  create(createGateDto: CreateGateDto) {
    return this.gatesRepository.create(createGateDto);
  }

  getAll() {
    return this.gatesRepository.getAll();
  }

  getOne(id: string) {
    return this.gatesRepository.findOneById(id);
  }

  update(id: string, updateGateDto: UpdateGateDto) {
    return this.gatesRepository.update(id, updateGateDto);
  }

  remove(id: string) {
    return this.gatesRepository.delete(id);
  }
}

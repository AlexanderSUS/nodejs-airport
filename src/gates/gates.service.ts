import { Injectable } from '@nestjs/common';
import { CreateGateDto } from './dto/create-gate.dto';
import { UpdateGateDto } from './dto/update-gate.dto';
import { GatesRepository } from './gates.repository';
import { GatesQueryParamsDto } from './dto/gates-query-params.dto';

@Injectable()
export class GatesService {
  constructor(private readonly gatesRepository: GatesRepository) {}

  create(createGateDto: CreateGateDto) {
    return this.gatesRepository.create(createGateDto);
  }

  getAll(gatesQueryParamsDto: GatesQueryParamsDto) {
    return this.gatesRepository.getAll(gatesQueryParamsDto);
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

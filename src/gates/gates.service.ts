import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateGateDto } from './dto/create-gate.dto';
import { UpdateGateDto } from './dto/update-gate.dto';
import { GatesRepository } from './gates.repository';

@Injectable()
export class GatesService {
  constructor(private readonly gatesRepository: GatesRepository) {}

  create(createGateDto: CreateGateDto) {
    return this.gatesRepository.create(createGateDto);
  }

  findAll() {
    return this.gatesRepository.getAll();
  }

  async findOne(id: string) {
    const gate = await this.gatesRepository.findOneById(id);

    if (!gate) {
      throw new NotFoundException();
    }

    return gate;
  }

  async update(id: string, updateGateDto: UpdateGateDto) {
    const updatedGate = await this.gatesRepository.update(id, updateGateDto);

    if (!updatedGate) {
      throw new NotFoundException();
    }

    return updatedGate;
  }

  async remove(id: string) {
    await this.gatesRepository.delete(id);
  }
}
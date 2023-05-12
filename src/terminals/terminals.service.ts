import { Injectable } from '@nestjs/common';
import { CreateTerminalDto } from './dto/create-terminal.dto';
import { UpdateTerminalDto } from './dto/update-terminal.dto';
import { TerminalsRepository } from './terminals.repository';

@Injectable()
export class TerminalsService {
  constructor(private readonly terminalsRepository: TerminalsRepository) {}

  async create(createTerminalDto: CreateTerminalDto) {
    return this.terminalsRepository.create(createTerminalDto);
  }

  getAll() {
    return this.terminalsRepository.getAll();
  }

  getOne(id: string) {
    return this.terminalsRepository.getById(id);
  }

  async update(id: string, updateTerminalDto: UpdateTerminalDto) {
    return this.terminalsRepository.update(id, updateTerminalDto);
  }

  remove(id: string) {
    return this.terminalsRepository.delete(id);
  }
}

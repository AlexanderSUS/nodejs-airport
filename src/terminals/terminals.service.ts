import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTerminalDto } from './dto/create-terminal.dto';
import { UpdateTerminalDto } from './dto/update-terminal.dto';
import { TerminalsRepository } from './terminals.repository';
import { TerminalsQueryParamsDto } from './dto/terminals-query-params.dto';

@Injectable()
export class TerminalsService {
  constructor(private readonly terminalsRepository: TerminalsRepository) {}

  async create(createTerminalDto: CreateTerminalDto) {
    return this.terminalsRepository.create(createTerminalDto);
  }

  findAll(terminalQueryParams: TerminalsQueryParamsDto) {
    return this.terminalsRepository.getAll(terminalQueryParams);
  }

  async findOne(id: string) {
    const terminal = await this.terminalsRepository.getById(id);

    if (!terminal) {
      throw new NotFoundException();
    }

    return terminal;
  }

  async update(id: string, updateTerminalDto: UpdateTerminalDto) {
    const terminal = await this.terminalsRepository.update(
      id,
      updateTerminalDto,
    );

    if (!terminal) {
      throw new NotFoundException();
    }

    return terminal;
  }

  async remove(id: string) {
    await this.terminalsRepository.delete(id);
  }
}

import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateTerminalDto } from './dto/create-terminal.dto';
import { UpdateTerminalDto } from './dto/update-terminal.dto';
import { TerminalsRepository } from './terminals.repository';
import { AirportsService } from 'src/airports/airports.service';

@Injectable()
export class TerminalsService {
  constructor(
    private readonly airportsService: AirportsService,
    private readonly terminalsRepository: TerminalsRepository,
  ) {}

  async create(createTerminalDto: CreateTerminalDto) {
    const airport = await this.airportsService.findOne(
      createTerminalDto.airportId,
    );

    if (!airport) {
      throw new BadRequestException('Airport with provided id does not exist');
    }

    return this.terminalsRepository.create(createTerminalDto);
  }

  findAll() {
    return this.terminalsRepository.getAll();
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

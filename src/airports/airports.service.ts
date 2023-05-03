import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAirportDto } from './dto/create-airport.dto';
import { UpdateAirportDto } from './dto/update-airport.dto';
import { AirportsRepository } from './airports.repository';

@Injectable()
export class AirportsService {
  constructor(private readonly airportsRepository: AirportsRepository) {}

  create(createAirportDto: CreateAirportDto) {
    return this.airportsRepository.create(createAirportDto);
  }

  findAll() {
    return this.airportsRepository.getAll();
  }

  async findOne(id: string) {
    const airport = await this.airportsRepository.getById(id);

    if (!airport) {
      throw new NotFoundException();
    }

    return airport;
  }

  async update(id: string, updateAirportDto: UpdateAirportDto) {
    const airport = await this.airportsRepository.update(id, updateAirportDto);

    if (!airport) {
      throw new NotFoundException();
    }

    return airport;
  }

  remove(id: string) {
    return this.airportsRepository.delete(id);
  }
}

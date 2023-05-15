import { Injectable } from '@nestjs/common';
import { CreateAirportDto } from './dto/create-airport.dto';
import { UpdateAirportDto } from './dto/update-airport.dto';
import { AirportsRepository } from './airports.repository';

@Injectable()
export class AirportsService {
  constructor(private readonly airportsRepository: AirportsRepository) {}

  create(createAirportDto: CreateAirportDto) {
    return this.airportsRepository.create(createAirportDto);
  }

  getAll() {
    return this.airportsRepository.getAll();
  }

  getOne(id: string) {
    return this.airportsRepository.getById(id);
  }

  update(id: string, updateAirportDto: UpdateAirportDto) {
    return this.airportsRepository.update(id, updateAirportDto);
  }

  remove(id: string) {
    return this.airportsRepository.delete(id);
  }
}

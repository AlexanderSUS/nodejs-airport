import { Injectable } from '@nestjs/common';
import { CreateFlightDto } from './dto/create-flight.dto';
import { UpdateFlightDto } from './dto/update-flight.dto';
import { FlightsRepository } from './flights.repository';

@Injectable()
export class FlightsService {
  constructor(private readonly flightsRepository: FlightsRepository) {}
  create(createFlightDto: CreateFlightDto) {
    return this.flightsRepository.create(createFlightDto);
  }

  getAll() {
    return this.flightsRepository.getAll();
  }

  getOne(id: string) {
    return this.flightsRepository.getById(id);
  }

  update(id: string, updateFlightDto: UpdateFlightDto) {
    return this.flightsRepository.update(id, updateFlightDto);
  }

  remove(id: string) {
    return this.flightsRepository.delete(id);
  }
}

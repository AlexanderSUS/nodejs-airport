import { Injectable } from '@nestjs/common';
import { CreateFlightDto } from './dto/create-flight.dto';
import { UpdateFlightDto } from './dto/update-flight.dto';
import { FlightsRepository } from './flights.repository';
import { FlightsSearchQueryParamsDto } from 'src/flights-search/dto/flights-search-query-params.dto';

@Injectable()
export class FlightsService {
  constructor(private readonly flightsRepository: FlightsRepository) {}
  create(createFlightDto: CreateFlightDto) {
    return this.flightsRepository.create(createFlightDto);
  }

  getAll(flightsQueryParams: FlightsSearchQueryParamsDto) {
    return this.flightsRepository.getAll(flightsQueryParams);
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

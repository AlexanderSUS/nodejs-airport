import { Injectable, NotFoundException } from '@nestjs/common';
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

  findAll(flightsQueryParams: FlightsSearchQueryParamsDto) {
    return this.flightsRepository.getAll(flightsQueryParams);
  }

  async findOne(id: string) {
    const flight = await this.flightsRepository.getById(id);

    if (!flight) {
      throw new NotFoundException();
    }

    return flight;
  }

  async update(id: string, updateFlightDto: UpdateFlightDto) {
    const flight = await this.flightsRepository.getById(id);

    if (!flight) {
      throw new NotFoundException();
    }

    return this.flightsRepository.update(id, updateFlightDto);
  }

  async remove(id: string) {
    await this.flightsRepository.delete(id);
  }
}

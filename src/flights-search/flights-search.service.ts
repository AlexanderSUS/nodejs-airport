import { Injectable } from '@nestjs/common';
import { FlightsSearchQueryParamsDto } from './dto/flights-search-query-params.dto';
import { FlightsSearchRepository } from './flights-search.repository';

@Injectable()
export class FlightsSearchService {
  constructor(
    private readonly flightsSearchRepository: FlightsSearchRepository,
  ) {}

  getAll(flightsQueryParamsDto: FlightsSearchQueryParamsDto) {
    return this.flightsSearchRepository.find(flightsQueryParamsDto);
  }
}

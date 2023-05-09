import { Controller, Get, Query, ValidationPipe } from '@nestjs/common';
import { FlightsSearchService } from './flights-search.service';
import { FlightsSearchQueryParamsDto } from './dto/flights-search-query-params.dto';

@Controller('flights-search')
export class FlightsSearchController {
  constructor(private readonly flightsSearchService: FlightsSearchService) {}

  @Get()
  findAll(
    @Query(
      new ValidationPipe({
        forbidUnknownValues: true,
        forbidNonWhitelisted: true,
        whitelist: true,
      }),
    )
    flightSearchQueryParams: FlightsSearchQueryParamsDto,
  ) {
    return this.flightsSearchService.findAll(flightSearchQueryParams);
  }
}

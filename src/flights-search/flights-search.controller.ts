import { Controller, Get, Query, ValidationPipe } from '@nestjs/common';
import { FlightsSearchService } from './flights-search.service';
import { FlightsSearchQueryParamsDto } from './dto/flights-search-query-params.dto';
import { ApiExtraModels, ApiTags } from '@nestjs/swagger';
import { FlightsSearchResponseDto } from 'src/flights-search/dto/flights-search-response.dto';
import { AppApiPaginatedResponse } from 'src/decorators/app-api.decorator';
import { PaginatedResponseDto } from 'src/common/dto/paginated-response.dto';

@ApiExtraModels(PaginatedResponseDto, FlightsSearchResponseDto)
@ApiTags('Flights search')
@Controller('flights-search')
export class FlightsSearchController {
  constructor(private readonly flightsSearchService: FlightsSearchService) {}

  @AppApiPaginatedResponse(FlightsSearchResponseDto)
  @Get()
  getAll(
    @Query(
      new ValidationPipe({
        forbidUnknownValues: true,
        forbidNonWhitelisted: true,
        whitelist: true,
        transform: true,
      }),
    )
    flightSearchQueryParams: FlightsSearchQueryParamsDto,
  ) {
    return this.flightsSearchService.getAll(flightSearchQueryParams);
  }
}

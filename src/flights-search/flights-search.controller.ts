import { Controller, Get, Query, ValidationPipe } from '@nestjs/common';
import { FlightsSearchService } from './flights-search.service';
import { FlightsSearchQueryParamsDto } from './dto/flights-search-query-params.dto';
import { ApiExtraModels, ApiTags } from '@nestjs/swagger';
import { FlightsSearchResponseDto } from './dto/flights-search-response.dto';
import { AppApiPaginatedResponse } from 'src/decorators/app-api.decorator';
import { PaginatedResponseDto } from 'src/common/dto/paginated-response.dto';

@ApiTags('Flights search')
@Controller('flights-search')
export class FlightsSearchController {
  constructor(private readonly flightsSearchService: FlightsSearchService) {}

  @ApiExtraModels(PaginatedResponseDto)
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

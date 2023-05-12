import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  ParseUUIDPipe,
  HttpCode,
  HttpStatus,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { AirportsService } from './airports.service';
import { CreateAirportDto } from './dto/create-airport.dto';
import { UpdateAirportDto } from './dto/update-airport.dto';
import { AirportsQueryParamsDto } from './dto/airports-query-params.dto';
import {
  AppApiCreatedResponse,
  AppApiNoContentResponse,
  AppApiOkResponse,
  AppApiPaginatedResponse,
} from 'src/decorators/app-api.decorator';
import { AirportsResponseDto } from './dto/airports-response.dto';
import { ApiExtraModels, ApiTags } from '@nestjs/swagger';
import { PaginatedResponseDto } from 'src/common/dto/paginated-response.dto';

@ApiExtraModels(PaginatedResponseDto)
@ApiTags('Airports')
@Controller('airports')
export class AirportsController {
  constructor(private readonly airportsService: AirportsService) {}

  @AppApiCreatedResponse({ type: AirportsResponseDto })
  @Post()
  create(@Body() createAirportDto: CreateAirportDto) {
    return this.airportsService.create(createAirportDto);
  }

  @AppApiPaginatedResponse(AirportsResponseDto)
  @Get()
  getAll(
    @Query(new ValidationPipe({ transform: true }))
    airportsQueryParams: AirportsQueryParamsDto,
  ) {
    return this.airportsService.getAll(airportsQueryParams);
  }

  @AppApiOkResponse({ type: AirportsResponseDto })
  @Get(':id')
  getOne(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    return this.airportsService.getOne(id);
  }

  @AppApiOkResponse({ type: AirportsResponseDto })
  @Put(':id')
  update(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
    @Body() updateAirportDto: UpdateAirportDto,
  ) {
    return this.airportsService.update(id, updateAirportDto);
  }

  @AppApiNoContentResponse()
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    return this.airportsService.remove(id);
  }
}

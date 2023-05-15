import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  ParseUUIDPipe,
  HttpStatus,
  HttpCode,
  Put,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { AircraftService } from './aircraft.service';
import { CreateAircraftDto } from './dto/create-aircraft.dto';
import { UpdateAircraftDto } from './dto/update-aircraft.dto';
import { AircraftQueryParamsDto } from './dto/aircraft-query-params.dto';
import { ApiExtraModels, ApiTags } from '@nestjs/swagger';
import { AircraftResponseDto } from './dto/aircraft-response.dto';
import {
  AppApiCreatedResponse,
  AppApiNoContentResponse,
  AppApiOkResponse,
} from 'src/decorators/app-api.decorator';
import { ApiPaginatedResponse } from 'src/decorators/api-paginated-response.decorator';
import { PaginatedResponseDto } from 'src/common/dto/paginated-response.dto';

@ApiExtraModels(PaginatedResponseDto)
@ApiTags('Aircraft')
@Controller('aircraft')
export class AircraftController {
  constructor(private readonly aircraftService: AircraftService) {}

  @AppApiCreatedResponse({ type: AircraftResponseDto })
  @Post()
  create(@Body() createAircraftDto: CreateAircraftDto) {
    return this.aircraftService.create(createAircraftDto);
  }

  @ApiPaginatedResponse(AircraftResponseDto)
  @Get()
  getAll(
    @Query(new ValidationPipe({ transform: true }))
    aircraftQueryParams: AircraftQueryParamsDto,
  ) {
    return this.aircraftService.getAll(aircraftQueryParams);
  }

  @AppApiOkResponse({ type: AircraftResponseDto })
  @Get(':id')
  getOne(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    return this.aircraftService.getOne(id);
  }

  @AppApiOkResponse({ type: AircraftResponseDto })
  @Put(':id')
  update(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
    @Body() updateAircraftDto: UpdateAircraftDto,
  ) {
    return this.aircraftService.update(id, updateAircraftDto);
  }

  @AppApiNoContentResponse()
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    return this.aircraftService.remove(id);
  }
}

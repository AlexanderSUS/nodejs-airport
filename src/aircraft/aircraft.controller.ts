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
} from '@nestjs/common';
import { AircraftService } from './aircraft.service';
import { CreateAircraftDto } from './dto/create-aircraft.dto';
import { UpdateAircraftDto } from './dto/update-aircraft.dto';
import { AircraftQueryParamsDto } from './dto/aircraft-query-params.dto';
import { ApiTags } from '@nestjs/swagger';
import { AircraftResponseDto } from './dto/aircraft-response.dto';
import {
  AppApiCreatedResponseDecorator,
  AppApiNoContentResponseDecorator,
  AppApiOkResponseDecorator,
  AppApiOkResponseWONotFoundExceptionDecorator,
} from 'src/decorators/app-api.decorator';

@ApiTags('Aircraft')
@Controller('aircraft')
export class AircraftController {
  constructor(private readonly aircraftService: AircraftService) {}

  @AppApiCreatedResponseDecorator({ type: AircraftResponseDto })
  @Post()
  create(@Body() createAircraftDto: CreateAircraftDto) {
    return this.aircraftService.create(createAircraftDto);
  }

  @AppApiOkResponseWONotFoundExceptionDecorator({ type: [AircraftResponseDto] })
  @Get()
  findAll(@Query() aircraftQueryParams: AircraftQueryParamsDto) {
    return this.aircraftService.findAll(aircraftQueryParams);
  }

  @AppApiOkResponseDecorator({ type: AircraftResponseDto })
  @Get(':id')
  findOne(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    return this.aircraftService.findOne(id);
  }

  @AppApiOkResponseDecorator({ type: AircraftResponseDto })
  @Put(':id')
  update(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
    @Body() updateAircraftDto: UpdateAircraftDto,
  ) {
    return this.aircraftService.update(id, updateAircraftDto);
  }

  @AppApiNoContentResponseDecorator()
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    return this.aircraftService.remove(id);
  }
}

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
} from '@nestjs/common';
import { AirportsService } from './airports.service';
import { CreateAirportDto } from './dto/create-airport.dto';
import { UpdateAirportDto } from './dto/update-airport.dto';
import { AirportsQueryParamsDto } from './dto/airports-query-params.dto';

@Controller('airports')
export class AirportsController {
  constructor(private readonly airportsService: AirportsService) {}

  @Post()
  create(@Body() createAirportDto: CreateAirportDto) {
    return this.airportsService.create(createAirportDto);
  }

  @Get()
  findAll(@Query() airportsQueryParams: AirportsQueryParamsDto) {
    return this.airportsService.findAll(airportsQueryParams);
  }

  @Get(':id')
  findOne(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    return this.airportsService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
    @Body() updateAirportDto: UpdateAirportDto,
  ) {
    return this.airportsService.update(id, updateAirportDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    return this.airportsService.remove(id);
  }
}

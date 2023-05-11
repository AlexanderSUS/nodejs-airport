import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  ParseUUIDPipe,
  Put,
  HttpStatus,
  HttpCode,
  Query,
} from '@nestjs/common';
import { GatesService } from './gates.service';
import { CreateGateDto } from './dto/create-gate.dto';
import { UpdateGateDto } from './dto/update-gate.dto';
import { GatesQueryParamsDto } from './dto/gates-query-params.dto';

@Controller('gates')
export class GatesController {
  constructor(private readonly gatesService: GatesService) {}

  @Post()
  create(@Body() createGateDto: CreateGateDto) {
    console.log(createGateDto);
    return this.gatesService.create(createGateDto);
  }

  @Get()
  findAll(@Query() gatesQueryParamsDto: GatesQueryParamsDto) {
    return this.gatesService.findAll(gatesQueryParamsDto);
  }

  @Get(':id')
  findOne(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    return this.gatesService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
    @Body() updateGateDto: UpdateGateDto,
  ) {
    return this.gatesService.update(id, updateGateDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    return this.gatesService.remove(id);
  }
}

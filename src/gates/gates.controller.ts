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
  ValidationPipe,
} from '@nestjs/common';
import { GatesService } from './gates.service';
import { CreateGateDto } from './dto/create-gate.dto';
import { UpdateGateDto } from './dto/update-gate.dto';
import { GatesQueryParamsDto } from './dto/gates-query-params.dto';
import { ApiExtraModels, ApiTags } from '@nestjs/swagger';
import {
  AppApiCreatedResponse,
  AppApiNoContentResponse,
  AppApiOkResponse,
  AppApiPaginatedResponse,
} from 'src/decorators/app-api.decorator';
import { GateResponseDto } from './dto/gate-response.dto';
import { PaginatedResponseDto } from 'src/common/dto/paginated-response.dto';

@ApiExtraModels(PaginatedResponseDto)
@ApiTags('Gates')
@Controller('gates')
export class GatesController {
  constructor(private readonly gatesService: GatesService) {}

  @AppApiCreatedResponse({ type: GateResponseDto })
  @Post()
  create(@Body() createGateDto: CreateGateDto) {
    console.log(createGateDto);
    return this.gatesService.create(createGateDto);
  }

  @AppApiPaginatedResponse(GateResponseDto)
  @Get()
  getAll(
    @Query(new ValidationPipe({ transform: true }))
    gatesQueryParamsDto: GatesQueryParamsDto,
  ) {
    return this.gatesService.getAll(gatesQueryParamsDto);
  }

  @AppApiOkResponse({ type: GateResponseDto })
  @Get(':id')
  getOne(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    return this.gatesService.getOne(id);
  }

  @AppApiOkResponse({ type: GateResponseDto })
  @Put(':id')
  update(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
    @Body() updateGateDto: UpdateGateDto,
  ) {
    return this.gatesService.update(id, updateGateDto);
  }

  @AppApiNoContentResponse()
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    return this.gatesService.remove(id);
  }
}

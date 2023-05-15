import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  ParseUUIDPipe,
  Put,
  HttpCode,
  HttpStatus,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { TerminalsService } from './terminals.service';
import { CreateTerminalDto } from './dto/create-terminal.dto';
import { UpdateTerminalDto } from './dto/update-terminal.dto';
import { TerminalsQueryParamsDto } from './dto/terminals-query-params.dto';
import { ApiExtraModels, ApiTags } from '@nestjs/swagger';
import {
  AppApiCreatedResponse,
  AppApiNoContentResponse,
  AppApiOkResponse,
  AppApiPaginatedResponse,
} from 'src/decorators/app-api.decorator';
import { TerminalsResponseDto } from './dto/terminals-response.dto';
import { PaginatedResponseDto } from 'src/common/dto/paginated-response.dto';

@ApiExtraModels(PaginatedResponseDto)
@ApiTags('Terminals')
@Controller('terminals')
export class TerminalsController {
  constructor(private readonly terminalsService: TerminalsService) {}

  @AppApiCreatedResponse({ type: TerminalsResponseDto })
  @Post()
  create(@Body() createTerminalDto: CreateTerminalDto) {
    return this.terminalsService.create(createTerminalDto);
  }

  @AppApiPaginatedResponse(TerminalsResponseDto)
  @Get()
  getAll(
    @Query(new ValidationPipe({ transform: true }))
    terminalsQueryParams: TerminalsQueryParamsDto,
  ) {
    return this.terminalsService.getAll(terminalsQueryParams);
  }

  @AppApiOkResponse({ type: TerminalsResponseDto })
  @Get(':id')
  getOne(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    return this.terminalsService.getOne(id);
  }

  @AppApiOkResponse({ type: TerminalsResponseDto })
  @Put(':id')
  update(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
    @Body() updateTerminalDto: UpdateTerminalDto,
  ) {
    return this.terminalsService.update(id, updateTerminalDto);
  }

  @AppApiNoContentResponse()
  @Delete(':id')
  @HttpCode(HttpStatus.NOT_FOUND)
  remove(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    return this.terminalsService.remove(id);
  }
}

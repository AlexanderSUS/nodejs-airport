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
} from '@nestjs/common';
import { TerminalsService } from './terminals.service';
import { CreateTerminalDto } from './dto/create-terminal.dto';
import { UpdateTerminalDto } from './dto/update-terminal.dto';
import { TerminalsQueryParamsDto } from './dto/terminals-query-params.dto';

@Controller('terminals')
export class TerminalsController {
  constructor(private readonly terminalsService: TerminalsService) {}

  @Post()
  create(@Body() createTerminalDto: CreateTerminalDto) {
    return this.terminalsService.create(createTerminalDto);
  }

  @Get()
  getAll(
    @Query()
    terminalsQueryParams: TerminalsQueryParamsDto,
  ) {
    return this.terminalsService.getAll(terminalsQueryParams);
  }

  @Get(':id')
  getOne(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    return this.terminalsService.getOne(id);
  }

  @Put(':id')
  update(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
    @Body() updateTerminalDto: UpdateTerminalDto,
  ) {
    return this.terminalsService.update(id, updateTerminalDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NOT_FOUND)
  remove(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    return this.terminalsService.remove(id);
  }
}

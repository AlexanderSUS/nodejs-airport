import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  ParseUUIDPipe,
  Put,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { FlightDocumentsService } from './flight-documents.service';
import { CreateFlightDocumentDto } from './dto/create-flight-document.dto';
import { UpdateFlightDocumentDto } from './dto/update-flight-document.dto';
import { FlightDocumentQueryParamsDto } from './dto/flight-documents-query-params.dto';
import { ApiExtraModels, ApiTags } from '@nestjs/swagger';
import {
  AppApiCreatedResponse,
  AppApiNoContentResponse,
  AppApiOkResponse,
  AppApiPaginatedResponse,
} from 'src/decorators/app-api.decorator';
import { FlightDocumentsResponseDto } from './dto/flight-documents-response.dto';
import { PaginatedResponseDto } from 'src/common/dto/paginated-response.dto';

@ApiExtraModels(PaginatedResponseDto)
@ApiTags('Flight documents')
@Controller('flight-documents')
export class FlightDocumentsController {
  constructor(
    private readonly flightDocumentsService: FlightDocumentsService,
  ) {}

  @AppApiCreatedResponse({ type: FlightDocumentsResponseDto })
  @Post()
  create(@Body() createFlightDocumentDto: CreateFlightDocumentDto) {
    return this.flightDocumentsService.create(createFlightDocumentDto);
  }

  @AppApiPaginatedResponse(FlightDocumentsResponseDto)
  @Get()
  getAll(
    @Query(new ValidationPipe({ transform: true }))
    flightDocumentQueryParams: FlightDocumentQueryParamsDto,
  ) {
    return this.flightDocumentsService.getAll(flightDocumentQueryParams);
  }

  @AppApiOkResponse({ type: FlightDocumentsResponseDto })
  @Put(':flightId/documents/:documentId')
  update(
    @Param('flightId', new ParseUUIDPipe({ version: '4' })) flightId: string,
    @Param('documentId', new ParseUUIDPipe({ version: '4' }))
    documentId: string,
    @Body() updateFlightDocumentDto: UpdateFlightDocumentDto,
  ) {
    return this.flightDocumentsService.update(
      flightId,
      documentId,
      updateFlightDocumentDto,
    );
  }

  @AppApiNoContentResponse()
  @Delete(':flightId/documents/:documentId')
  remove(
    @Param('flightId', new ParseUUIDPipe({ version: '4' })) flightId: string,
    @Param('documentId', new ParseUUIDPipe({ version: '4' }))
    documentId: string,
  ) {
    return this.flightDocumentsService.remove(flightId, documentId);
  }
}

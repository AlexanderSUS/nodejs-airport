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
} from '@nestjs/common';
import { FlightDocumentsService } from './flight-documents.service';
import { CreateFlightDocumentDto } from './dto/create-flight-document.dto';
import { UpdateFlightDocumentDto } from './dto/update-flight-document.dto';
import { FlightDocumentQueryParamsDto } from './dto/flight-documents-query-params.dto';

@Controller('flight-documents')
export class FlightDocumentsController {
  constructor(
    private readonly flightDocumentsService: FlightDocumentsService,
  ) {}

  @Post()
  create(@Body() createFlightDocumentDto: CreateFlightDocumentDto) {
    return this.flightDocumentsService.create(createFlightDocumentDto);
  }

  @Get()
  getAll(@Query() flightDocumentQueryParams: FlightDocumentQueryParamsDto) {
    return this.flightDocumentsService.getAll(flightDocumentQueryParams);
  }

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

  @Delete(':flightId/documents/:documentId')
  remove(
    @Param('flightId', new ParseUUIDPipe({ version: '4' })) flightId: string,
    @Param('documentId', new ParseUUIDPipe({ version: '4' }))
    documentId: string,
  ) {
    return this.flightDocumentsService.remove(flightId, documentId);
  }
}

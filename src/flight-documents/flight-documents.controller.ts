import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  ParseUUIDPipe,
  Put,
} from '@nestjs/common';
import { FlightDocumentsService } from './flight-documents.service';
import { CreateFlightDocumentDto } from './dto/create-flight-document.dto';
import { UpdateFlightDocumentDto } from './dto/update-flight-document.dto';

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
  findAll() {
    return this.flightDocumentsService.getAll();
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

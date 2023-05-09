import { Module } from '@nestjs/common';
import { FlightDocumentsService } from './flight-documents.service';
import { FlightDocumentsController } from './flight-documents.controller';
import { FlightDocumentRepository } from './flight-documents.repository';

@Module({
  controllers: [FlightDocumentsController],
  providers: [FlightDocumentsService, FlightDocumentRepository],
})
export class FlightDocumentsModule {}

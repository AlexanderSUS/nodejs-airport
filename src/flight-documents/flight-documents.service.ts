import { Injectable } from '@nestjs/common';
import { CreateFlightDocumentDto } from './dto/create-flight-document.dto';
import { UpdateFlightDocumentDto } from './dto/update-flight-document.dto';
import { FlightDocumentRepository } from './flight-documents.repository';

@Injectable()
export class FlightDocumentsService {
  constructor(
    private readonly flightDocumentsRepository: FlightDocumentRepository,
  ) {}
  create(createFlightDocumentDto: CreateFlightDocumentDto) {
    return this.flightDocumentsRepository.create(createFlightDocumentDto);
  }

  getAll() {
    return this.flightDocumentsRepository.getAll();
  }

  update(
    flightId: string,
    documentId: string,
    updateFlightDocumentDto: UpdateFlightDocumentDto,
  ) {
    return this.flightDocumentsRepository.update(
      flightId,
      documentId,
      updateFlightDocumentDto,
    );
  }

  remove(flightId: string, documentId: string) {
    return this.flightDocumentsRepository.delete(flightId, documentId);
  }
}

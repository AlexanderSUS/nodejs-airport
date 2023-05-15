import { Expose } from 'class-transformer';

export class FlightDocumentsModel {
  @Expose({ name: 'flight_id' })
  flightId: string;

  @Expose({ name: 'document_id' })
  documentId: string;
}

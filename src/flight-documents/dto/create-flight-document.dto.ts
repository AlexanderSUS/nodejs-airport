import { IsUUID } from 'class-validator';

export class CreateFlightDocumentDto {
  @IsUUID('4')
  flightId: string;

  @IsUUID('4')
  documentId: string;
}

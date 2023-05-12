import { FlightDocumentsModel } from '../flight-documents.model';
import { CreateFlightDocumentDto } from './create-flight-document.dto';

export class FlightDocumentsResponseDto
  extends CreateFlightDocumentDto
  implements FlightDocumentsModel {}

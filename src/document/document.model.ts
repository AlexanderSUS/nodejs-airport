import { Expose } from 'class-transformer';
import { DocumentType } from './enum/document-type.enum';

export class DocumentModel {
  id: string;

  type: DocumentType;

  @Expose({ name: 'person_id' })
  personId: string;
}

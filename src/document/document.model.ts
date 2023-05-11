import { Expose } from 'class-transformer';
import { DocumentType } from './enum/document-type.enum';
import { BaseModel } from 'src/common/base.model';

export class DocumentModel extends BaseModel {
  id: string;

  type: DocumentType;

  @Expose({ name: 'person_id' })
  personId: string;
}

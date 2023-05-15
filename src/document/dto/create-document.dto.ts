import { IsEnum, IsUUID } from 'class-validator';
import { DocumentType } from '../enum/document-type.enum';

export class CreateDocumentDto {
  @IsEnum(DocumentType)
  type: DocumentType;

  @IsUUID('4')
  personId: string;
}

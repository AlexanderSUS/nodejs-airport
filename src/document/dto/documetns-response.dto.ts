import { ApiProperty } from '@nestjs/swagger';
import { DocumentModel } from '../document.model';
import { CreateDocumentDto } from './create-document.dto';

export class DocumentsResponseDto
  extends CreateDocumentDto
  implements DocumentModel
{
  @ApiProperty({
    example: '86253827-6015-4e60-a98f-74ca0dd60d6e',
  })
  id: string;
}

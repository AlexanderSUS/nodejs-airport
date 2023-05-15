import { IsEnum, IsUUID } from 'class-validator';
import { DocumentType } from '../enum/document-type.enum';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDocumentDto {
  @ApiProperty({
    example: DocumentType.driverLicense,
    enum: DocumentType,
  })
  @IsEnum(DocumentType)
  type: DocumentType;

  @ApiProperty({
    example: '340337f5-0f22-4068-a400-85b4f92bd98a',
  })
  @IsUUID('4')
  personId: string;
}

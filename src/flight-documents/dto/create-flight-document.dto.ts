import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class CreateFlightDocumentDto {
  @ApiProperty({
    example: '86253827-6015-4e60-a98f-74ca0dd60daa',
  })
  @IsUUID('4')
  flightId: string;

  @ApiProperty({
    example: '86253827-2215-4e60-a98f-74ca0dd60d6e',
  })
  @IsUUID('4')
  documentId: string;
}

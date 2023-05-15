import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUUID, Length } from 'class-validator';

export class CreateGateDto {
  @ApiProperty({
    example: '86253827-6015-4e63-a98f-74ca0dd60d6e',
  })
  @IsUUID('4')
  terminalId: string;

  @ApiProperty({
    example: '22',
  })
  @Length(1, 6)
  @IsString()
  number: string;

  @ApiProperty({
    example: '86253827-6015-4e60-a98f-74ca22dd60d6e',
  })
  @IsUUID('4')
  airportId: string;
}

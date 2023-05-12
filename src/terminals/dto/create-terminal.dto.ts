import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUUID, MinLength } from 'class-validator';

export class CreateTerminalDto {
  @ApiProperty({
    example: 'A',
  })
  @MinLength(1)
  @IsString()
  name: string;

  @ApiProperty({
    example: '86253827-6015-4e60-a98f-74ca0dd60d6e',
  })
  @IsUUID('4')
  airportId: string;
}

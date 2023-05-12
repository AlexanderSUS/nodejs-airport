import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length } from 'class-validator';

export class CreateAirportDto {
  @ApiProperty({
    example: 'DXB',
  })
  @Length(3, 3)
  @IsString()
  iata: string;

  @ApiProperty({
    example: 'Dubai International Airport',
  })
  @Length(1, 255)
  @IsString()
  name: string;

  @ApiProperty({
    example: 'Dubai',
  })
  @Length(1, 100)
  @IsString()
  city: string;

  @ApiProperty({
    example: 'UAE',
  })
  @Length(1, 100)
  @IsString()
  country: string;
}

import { ApiProperty } from '@nestjs/swagger';
import {
  IsUUID,
  IsString,
  IsDateString,
  IsNumber,
  Max,
  Min,
} from 'class-validator';

export class CreateFlightDto {
  @ApiProperty({
    example: '2023-05-07',
  })
  @IsDateString()
  date: Date;

  @ApiProperty({
    example: 499.0,
  })
  @Max(1000000)
  @Min(0.01)
  @IsNumber({
    maxDecimalPlaces: 2,
  })
  cost: number;

  @ApiProperty({
    example: '86253827-6015-4e60-a98f-74ca0dd60dae',
  })
  @IsUUID('4')
  aircraftId: string;

  @ApiProperty({
    example: '09:00',
  })
  @IsString()
  departureTime: string;

  @ApiProperty({
    example: '12:00',
  })
  @IsString()
  arrivalTime: string;

  @ApiProperty({
    example: '86253827-6011-4e60-a98f-74ca0dd60dae',
  })
  @IsUUID()
  departureAirportId: string;

  @ApiProperty({
    example: '86253827-6011-4e60-a98f-74ca0dd622ae',
  })
  @IsUUID()
  departureTerminalId: string;

  @ApiProperty({
    example: '86253827-6011-4e63-a98f-74ca0dd62200',
  })
  @IsUUID()
  departureGateId: string;

  @ApiProperty({
    example: '86253827-6011-4e63-a98f-74ca0ed62200',
  })
  @IsUUID()
  arrivalAirportId: string;

  @ApiProperty({
    example: '86253827-6011-4e63-a98f-74ca0ed62b00',
  })
  @IsUUID()
  arrivalTerminalId: string;

  @ApiProperty({
    example: '86253827-6011-4e63-a98f-74aa0ed62b22',
  })
  @IsUUID()
  arrivalGateId: string;
}

import { ApiProperty } from '@nestjs/swagger';
import { FlightsModel } from '../flights.model';

export class FlightsResponseDto implements FlightsModel {
  @ApiProperty({
    example: '86253827-6015-4e60-a98f-74ca0dd60d6e',
  })
  id: string;

  @ApiProperty({
    example: '2023-05-07T00:00:00.000Z',
  })
  date: string;

  @ApiProperty({
    example: '$499.99',
  })
  cost: string;

  @ApiProperty({
    example: '86253827-6015-4e60-a98f-74ca0dd60dae',
  })
  aircraftId: string;

  @ApiProperty({
    example: '09:00',
  })
  departureTime: string;

  @ApiProperty({
    example: '12:00',
  })
  arrivalTime: string;

  @ApiProperty({
    example: '86253827-6011-4e60-a98f-74ca0dd60dae',
  })
  departureAirportId: string;

  @ApiProperty({
    example: '86253827-6011-4e60-a98f-74ca0dd622ae',
  })
  departureTerminalId: string;

  @ApiProperty({
    example: '86253827-6011-4e63-a98f-74ca0dd62200',
  })
  departureGateId: string;

  @ApiProperty({
    example: '86253827-6011-4e63-a98f-74ca0ed62200',
  })
  arrivalAirportId: string;

  @ApiProperty({
    example: '86253827-6011-4e63-a98f-74ca0ed62b00',
  })
  arrivalTerminalId: string;

  @ApiProperty({
    example: '86253827-6011-4e63-a98f-74aa0ed62b22',
  })
  arrivalGateId: string;
}

import { ApiProperty } from '@nestjs/swagger';
import { FlightsSearchModel } from '../flights-search.model';

export class FlightsSearchResponseDto implements FlightsSearchModel {
  @ApiProperty({ example: '86253827-6015-4e60-a98f-74ca0dd60d6e' })
  id: string;

  @ApiProperty({ example: '2023-05-07T00:00:00.000Z' })
  date: string;

  @ApiProperty({ example: '$499.99' })
  cost: string;

  @ApiProperty({ example: 'UAE' })
  departureCountry: string;

  @ApiProperty({ example: 'Dubai' })
  departureCity: string;

  @ApiProperty({ example: '09:00' })
  departureTime: string;

  @ApiProperty({ example: 'DXB' })
  departureAirportIata: string;

  @ApiProperty({ example: '13:00' })
  arrivalTime: string;

  @ApiProperty({ example: 'Paris' })
  arrivalCity: string;

  @ApiProperty({ example: 'France' })
  arrivalCountry: string;

  @ApiProperty({ example: 'CDG' })
  arrivalAirportIata: string;

  @ApiProperty({ example: 20 })
  availableSeats: number;

  @ApiProperty({ example: '737-800' })
  aircraftModel: string;
}

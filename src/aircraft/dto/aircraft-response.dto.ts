import { ApiProperty } from '@nestjs/swagger';
import { AircraftModel } from '../aircraft.model';

export class AircraftResponseDto implements AircraftModel {
  @ApiProperty({
    example: '7a09d9c5-1038-454c-94a2-3aa15a0a7243',
  })
  id: string;

  @ApiProperty({
    example: 'Boeing',
  })
  make: string;

  @ApiProperty({
    example: '737-800',
  })
  model: string;

  @ApiProperty({
    example: 320,
  })
  seats: number;
}

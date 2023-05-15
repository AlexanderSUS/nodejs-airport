import { ApiProperty } from '@nestjs/swagger';
import { AirportModel } from '../airport.model';
import { CreateAirportDto } from './create-airport.dto';

export class AirportsResponseDto
  extends CreateAirportDto
  implements AirportModel
{
  @ApiProperty({
    example: '7a09d9c5-1038-454c-94a2-3aa15a0a7243',
  })
  id: string;
}

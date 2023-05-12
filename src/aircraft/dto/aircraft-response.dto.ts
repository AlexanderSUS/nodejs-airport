import { ApiProperty } from '@nestjs/swagger';
import { AircraftModel } from '../aircraft.model';
import { CreateAircraftDto } from './create-aircraft.dto';

export class AircraftResponseDto
  extends CreateAircraftDto
  implements AircraftModel
{
  @ApiProperty({
    example: '7a09d9c5-1038-454c-94a2-3aa15a0a7243',
  })
  id: string;
}

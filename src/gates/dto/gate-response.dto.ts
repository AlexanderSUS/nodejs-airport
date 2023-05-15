import { ApiProperty } from '@nestjs/swagger';
import { GatesModel } from '../gates.model';
import { CreateGateDto } from './create-gate.dto';

export class GateResponseDto extends CreateGateDto implements GatesModel {
  @ApiProperty({
    example: '86253827-6015-4e60-a98f-74ca0dd60d6e',
  })
  id: string;
}

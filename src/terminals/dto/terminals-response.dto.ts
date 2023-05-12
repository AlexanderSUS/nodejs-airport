import { ApiProperty } from '@nestjs/swagger';
import { TerminalModel } from '../terminal.model';
import { CreateTerminalDto } from './create-terminal.dto';

export class TerminalsResponseDto
  extends CreateTerminalDto
  implements TerminalModel
{
  @ApiProperty({
    example: '86253827-6015-4e60-a98f-74ca22dd60d6e',
  })
  id: string;
}

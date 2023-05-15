import { ApiProperty } from '@nestjs/swagger';
import { PersonsModel } from '../persons.model';
import { CreatePersonDto } from './create-person.dto';

export class PersonsResponseDto
  extends CreatePersonDto
  implements PersonsModel
{
  @ApiProperty({
    example: '86253827-6015-4e60-a98f-74ca0dd60d6e',
  })
  id: string;
}

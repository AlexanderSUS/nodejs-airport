import { ApiProperty } from '@nestjs/swagger';
import { EmployeeModel } from '../employees.model';

type SafeEmployeeModel = Omit<EmployeeModel, 'password'>;

export class EmployeesResponseDto implements SafeEmployeeModel {
  @ApiProperty({
    example: '86253827-6015-4e60-a98f-74ca0dd60d6e',
  })
  id: string;

  @ApiProperty({
    example: 'Ashtyn',
  })
  firstName: string;

  @ApiProperty({
    example: 'Hoppe',
  })
  lastName: string;

  @ApiProperty({
    example: 'Kevin.Dare54@example.net',
  })
  email: string;
}

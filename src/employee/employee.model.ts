import { Expose } from 'class-transformer';

export class EmployeeModel {
  id: string;

  @Expose({ name: 'first_name' })
  firstName: string;

  @Expose({ name: 'last_name' })
  lastName: string;

  email: string;
  password: string;
}

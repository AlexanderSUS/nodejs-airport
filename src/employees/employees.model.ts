import { Expose } from 'class-transformer';
import { BaseModel } from 'src/common/base.model';

export class EmployeeModel extends BaseModel {
  id: string;

  @Expose({ name: 'first_name' })
  firstName: string;

  @Expose({ name: 'last_name' })
  lastName: string;

  email: string;
  password: string;
}

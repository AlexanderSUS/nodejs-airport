import { Expose } from 'class-transformer';
import { BaseModel } from 'src/common/base.model';

export class PersonsModel extends BaseModel {
  id: string;

  @Expose({ name: 'first_name' })
  firstName: string;

  @Expose({ name: 'last_name' })
  lastName: string;
}

import { Expose } from 'class-transformer';

export class PersonsModel {
  id: string;

  @Expose({ name: 'first_name' })
  firstName: string;

  @Expose({ name: 'last_name' })
  lastName: string;
}

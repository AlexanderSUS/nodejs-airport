import { Expose } from 'class-transformer';
import { BaseModel } from 'src/common/base.model';

export class GatesModel extends BaseModel {
  id: string;
  number: string;

  @Expose({ name: 'terminal_id' })
  terminalId: string;

  @Expose({ name: 'airport_id' })
  airportId: string;
}

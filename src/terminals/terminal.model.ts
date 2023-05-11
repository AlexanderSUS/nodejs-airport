import { Expose } from 'class-transformer';
import { BaseModel } from 'src/common/base.model';

export class TerminalModel extends BaseModel {
  id: string;
  name: string;

  @Expose({ name: 'airport_id' })
  airportId: string;
}

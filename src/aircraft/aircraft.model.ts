import { BaseModel } from 'src/common/base.model';

export class AircraftModel extends BaseModel {
  id: string;
  make: string;
  model: string;
  seats: number;
}

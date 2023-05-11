import { BaseModel } from 'src/common/base.model';

export class AirportModel extends BaseModel {
  id: string;
  iata: string;
  name: string;
  city: string;
  country: string;
}

import { Exclude } from 'class-transformer';

export class AirportModel {
  id: string;
  iata: string;
  name: string;
  city: string;
  country: string;

  @Exclude()
  total_count?: number;
}

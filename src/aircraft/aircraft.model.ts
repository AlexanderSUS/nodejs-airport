import { Exclude } from 'class-transformer';

export class AircraftModel {
  id: string;
  make: string;
  model: string;
  seats: number;

  @Exclude()
  total_count?: number;
}

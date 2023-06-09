import { Expose, Transform } from 'class-transformer';
import { BaseModel } from 'src/common/base.model';

export class FlightsSearchModel extends BaseModel {
  @Expose({ name: 'flight_id' })
  id: string;

  @Expose({ name: 'flight_date' })
  date: string;

  cost: string;

  @Expose({ name: 'departure_country' })
  departureCountry: string;

  @Expose({ name: 'departure_city' })
  departureCity: string;

  @Expose({ name: 'departure_time' })
  departureTime: string;

  @Expose({ name: 'departure_airport_iata' })
  departureAirportIata: string;

  @Expose({ name: 'arrival_time' })
  arrivalTime: string;

  @Expose({ name: 'arrival_city' })
  arrivalCity: string;

  @Expose({ name: 'arrival_country' })
  arrivalCountry: string;

  @Expose({ name: 'arrival_airport_iata' })
  arrivalAirportIata: string;

  @Expose({ name: 'available_seats' })
  @Transform(({ value }) => parseInt(value, 10))
  availableSeats: number;

  @Expose({ name: 'aircraft_model' })
  aircraftModel: string;
}

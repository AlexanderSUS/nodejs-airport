import { Expose } from 'class-transformer';

export class FlightsSearchModel {
  date: string;

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
  availableSeats: string;
}

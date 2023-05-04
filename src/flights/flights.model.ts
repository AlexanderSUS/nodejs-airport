import { Expose } from 'class-transformer';

export class FlightsModel {
  id: string;

  @Expose({ name: 'aircraft_id' })
  aircraftId: string;

  @Expose({ name: 'departure_time' })
  departureTime: string;

  @Expose({ name: 'arrival_time' })
  arrivalTime: string;

  @Expose({ name: 'departure_airport_id' })
  departureAirportId: string;

  @Expose({ name: 'departure_terminal_id' })
  departureTerminalId: string;

  @Expose({ name: 'departure_gate_id' })
  departureGateId: string;

  @Expose({ name: 'arrival_airport_id' })
  arrivalAirportId: string;

  @Expose({ name: 'arrival_terminal_id' })
  arrivalTerminalId: string;

  @Expose({ name: 'arrival_gate_id' })
  arrivalGateId: string;
}

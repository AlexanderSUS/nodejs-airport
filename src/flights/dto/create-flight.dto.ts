import { IsUUID, IsString, IsDateString } from 'class-validator';

export class CreateFlightDto {
  @IsDateString()
  date: Date;

  @IsUUID('4')
  aircraftId: string;

  @IsString()
  departureTime: string;

  @IsString()
  arrivalTime: string;

  @IsUUID()
  departureAirportId: string;

  @IsUUID()
  departureTerminalId: string;

  @IsUUID()
  departureGateId: string;

  @IsUUID()
  arrivalAirportId: string;

  @IsUUID()
  arrivalTerminalId: string;

  @IsUUID()
  arrivalGateId: string;
}

import {
  IsUUID,
  IsString,
  IsDateString,
  IsNumber,
  Max,
  Min,
} from 'class-validator';

export class CreateFlightDto {
  @IsDateString()
  date: Date;

  @Max(1000000)
  @Min(0.01)
  @IsNumber({
    maxDecimalPlaces: 2,
  })
  cost: string;

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

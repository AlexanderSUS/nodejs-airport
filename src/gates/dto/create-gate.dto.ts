import { IsString, IsUUID, Length } from 'class-validator';

export class CreateGateDto {
  @IsUUID('4')
  terminalId: string;

  @Length(1, 6)
  @IsString()
  number: string;

  @IsUUID('4')
  airportId: string;
}

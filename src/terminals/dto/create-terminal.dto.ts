import { IsString, IsUUID, MinLength } from 'class-validator';

export class CreateTerminalDto {
  @MinLength(1)
  @IsString()
  name: string;

  @IsUUID('4')
  airportId: string;
}

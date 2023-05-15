import { IsString, Length } from 'class-validator';

export class CreateAirportDto {
  @Length(3, 3)
  @IsString()
  iata: string;

  @Length(1, 255)
  @IsString()
  name: string;

  @Length(1, 100)
  @IsString()
  city: string;

  @Length(1, 100)
  @IsString()
  country: string;
}

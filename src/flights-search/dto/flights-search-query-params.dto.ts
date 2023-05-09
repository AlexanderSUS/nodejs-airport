import { Transform } from 'class-transformer';
import {
  IsDateString,
  IsOptional,
  IsString,
  Length,
  Max,
  Min,
} from 'class-validator';

export class FlightsSearchQueryParamsDto {
  @IsDateString()
  @IsOptional()
  start_date: string;

  @IsDateString()
  @IsOptional()
  end_date: string;

  @Length(1, 100)
  @IsString()
  @IsOptional()
  'departure_airport.city'?: string;

  @Length(1, 100)
  @IsString()
  @IsOptional()
  'departure_airport.country'?: string;

  @Length(1, 100)
  @IsString()
  @IsOptional()
  'arrival_airport.city'?: string;

  @Length(1, 100)
  @IsString()
  @IsOptional()
  'arrival_airport.county'?: string;

  @Max(1000)
  @Min(0)
  @Transform(({ value }) => parseInt(value, 10))
  @IsOptional()
  available_seats? = 1;
}

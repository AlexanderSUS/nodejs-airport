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
  date?: string;

  @Length(1, 100)
  @IsString()
  @IsOptional()
  departure_city?: string;

  @Length(1, 100)
  @IsString()
  @IsOptional()
  departure_country?: string;

  @Length(1, 100)
  @IsString()
  @IsOptional()
  arrival_city?: string;

  @Length(1, 100)
  @IsString()
  @IsOptional()
  arrival_country?: string;

  @Max(1000)
  @Min(0)
  @Transform(({ value }) => parseInt(value, 10))
  @IsOptional()
  available_seats? = 0;
}

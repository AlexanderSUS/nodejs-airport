import { Transform } from 'class-transformer';
import {
  IsDateString,
  IsOptional,
  IsString,
  Length,
  Max,
  Min,
} from 'class-validator';
import { BaseQueryParamsDto } from 'src/common/dto/base-query-params.dto';

export class FlightsSearchQueryParamsDto extends BaseQueryParamsDto {
  @IsDateString()
  @IsOptional()
  start_date?: string;

  @IsDateString()
  @IsOptional()
  end_date?: string;

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
  @Min(1)
  @Transform(({ value }) => parseInt(value, 10))
  @IsOptional()
  available_seats?: number;
}

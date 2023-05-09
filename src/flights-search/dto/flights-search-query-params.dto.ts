import { IsDateString, IsOptional, IsString, Length } from 'class-validator';

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
}

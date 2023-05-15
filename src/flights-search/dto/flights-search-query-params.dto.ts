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
import { DEFAULT_MIN_AVAILABLE_SEATS } from '../constants';
import { ApiProperty } from '@nestjs/swagger';

export class FlightsSearchQueryParamsDto extends BaseQueryParamsDto {
  @ApiProperty({
    example: '2023-05-14',
  })
  @IsDateString()
  @IsOptional()
  start_date?: string;

  @ApiProperty({
    example: '2023-05-18',
  })
  @IsDateString()
  @IsOptional()
  end_date?: string;

  @ApiProperty({
    example: 'Paris',
  })
  @Length(1, 100)
  @IsString()
  @IsOptional()
  'departure_airport.city'?: string;

  @ApiProperty({
    example: 'France',
  })
  @Length(1, 100)
  @IsString()
  @IsOptional()
  'departure_airport.country'?: string;

  @ApiProperty({
    example: 'Dubai',
  })
  @Length(1, 100)
  @IsString()
  @IsOptional()
  'arrival_airport.city'?: string;

  @ApiProperty({
    example: 'UAE',
  })
  @Length(1, 100)
  @IsString()
  @IsOptional()
  'arrival_airport.country'?: string;

  @ApiProperty({
    example: 3,
  })
  @Max(1000)
  @Min(1)
  @Transform(({ value }) => parseInt(value, 10))
  @IsOptional()
  available_seats?: number = DEFAULT_MIN_AVAILABLE_SEATS;
}

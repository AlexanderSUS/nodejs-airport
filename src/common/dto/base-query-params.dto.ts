import { Transform } from 'class-transformer';
import { IsOptional, Max, Min } from 'class-validator';

export class BaseQueryParamsDto {
  @Min(0)
  @Transform(({ value }) => parseInt(value, 10))
  @IsOptional()
  offset?: number;

  @Max(500)
  @Min(1)
  @Transform(({ value }) => parseInt(value, 10))
  @IsOptional()
  limit?: number;
}

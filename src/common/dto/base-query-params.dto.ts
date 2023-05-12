import { Transform } from 'class-transformer';
import { IsOptional, Max, Min } from 'class-validator';
import { DEFAULT_LIMIT, DEFAULT_OFFSET } from '../default-params.const';

export class BaseQueryParamsDto {
  @Min(0)
  @Transform(({ value }) => parseInt(value, 10))
  @IsOptional()
  offset: number = DEFAULT_OFFSET;

  @Max(500)
  @Min(1)
  @Transform(({ value }) => parseInt(value, 10))
  @IsOptional()
  limit: number = DEFAULT_LIMIT;
}

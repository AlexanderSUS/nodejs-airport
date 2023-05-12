import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsOptional, Max, Min } from 'class-validator';
import { DEFAULT_LIMIT, DEFAULT_OFFSET } from '../default-params.const';

export class BaseQueryParamsDto {
  @ApiProperty({
    required: false,
    example: 10,
  })
  @Min(0)
  @Transform(({ value }) => parseInt(value, 10))
  @IsOptional()
  offset?: number = DEFAULT_OFFSET;

  @ApiProperty({
    required: false,
    example: 10,
  })
  @Max(500)
  @Min(1)
  @Transform(({ value }) => parseInt(value, 10))
  @IsOptional()
  limit?: number = DEFAULT_LIMIT;
}

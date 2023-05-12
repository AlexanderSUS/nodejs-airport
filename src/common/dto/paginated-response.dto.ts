import { ApiProperty } from '@nestjs/swagger';

export class PaginatedResponseDto<TData> {
  @ApiProperty({
    example: '1',
  })
  total: string;

  data: TData[];
}

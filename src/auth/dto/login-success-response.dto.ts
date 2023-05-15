import { ApiProperty } from '@nestjs/swagger';

export class LoginSuccessResponseDto {
  @ApiProperty({
    example: '1683901560387380321417',
  })
  accessToken: string;

  @ApiProperty({
    example: '1683901560387546588623',
  })
  refreshToken: string;
}

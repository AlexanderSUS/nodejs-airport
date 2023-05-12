import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class LoginDto {
  @ApiProperty({
    example: 'Kevin.Dare54@example.net',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: 'secret_pass',
  })
  @Length(8, 32)
  @IsString()
  @IsNotEmpty()
  password: string;
}

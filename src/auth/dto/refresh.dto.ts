import { PickType } from '@nestjs/swagger';
import { LoginSuccessResponseDto } from './login-success-response.dto';

export class RefreshDto extends PickType(LoginSuccessResponseDto, [
  'refreshToken',
] as const) {}

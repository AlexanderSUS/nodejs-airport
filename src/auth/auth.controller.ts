import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import {
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { RegisterSuccessResponseDto } from './dto/register-success-response.dto';
import { LoginSuccessResponseDto } from './dto/login-success-response.dto';
import { RefreshDto } from './dto/refresh.dto';
import { RefreshSuccessResponse } from './dto/refresh-success-response.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiCreatedResponse({ type: RegisterSuccessResponseDto })
  @Post('register')
  register(@Body() createEmployeeDto: RegisterDto) {
    return this.authService.register(createEmployeeDto);
  }

  @ApiOkResponse({ type: LoginSuccessResponseDto })
  @Post('login')
  @HttpCode(HttpStatus.OK)
  logIn(@Body() loginDto: LoginDto) {
    return this.authService.logIn(loginDto);
  }

  @ApiOkResponse({ type: RefreshSuccessResponse })
  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  async refresh(@Body() { refreshToken }: RefreshDto) {
    return this.authService.refresh(refreshToken);
  }

  @ApiNoContentResponse()
  @Post('logout')
  @HttpCode(HttpStatus.NO_CONTENT)
  async logOut(@Body() body: LoginSuccessResponseDto) {
    await this.authService.logOut(body.accessToken, body.refreshToken);
  }
}

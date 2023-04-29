import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { CreateEmployeeDto } from 'src/employee/dto/create-employee.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() createEmployeeDto: CreateEmployeeDto) {
    return this.authService.register(createEmployeeDto);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  logIn(@Body() loginDto: LoginDto) {
    return this.authService.logIn(loginDto);
  }

  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  async refresh(@Body() { refreshToken }: { refreshToken: string }) {
    return this.authService.refresh(refreshToken);
  }

  @Post('logout')
  @HttpCode(HttpStatus.NO_CONTENT)
  async logOut(@Body() tokens: { accessToken: string; refreshToken: string }) {
    await this.authService.logOut(tokens.accessToken, tokens.refreshToken);
  }
}

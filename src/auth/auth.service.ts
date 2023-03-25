import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { LoginDto } from './dto/loginDto';
import { TokenService } from './token.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly tokenService: TokenService,
    private readonly databaseService: DatabaseService,
  ) {}

  async logIn({ email, password }: LoginDto) {
    const user = this.databaseService.findOne({
      key: 'email',
      value: email,
    });

    if (!user) {
      throw new BadRequestException('Invalid credentials');
    }

    if (user.password !== password) {
      throw new BadRequestException('Invalid credentials');
    }

    return this.tokenService.getTokens(user.id);
  }

  async refresh(refreshToken: string) {
    const userId = await this.tokenService.find(refreshToken);

    if (!userId) {
      throw new UnauthorizedException();
    }

    return this.tokenService.renewTokens(userId, refreshToken);
  }

  async logOut(accessToken: string, refreshToken: string) {
    const userId = await this.tokenService.find(accessToken);

    if (!userId) {
      throw new UnauthorizedException();
    }

    await this.tokenService.remove(accessToken);
    await this.tokenService.remove(refreshToken);
  }
}

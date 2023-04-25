import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { LoginDto } from './dto/loginDto';
import { TokenService } from './token.service';
import { EmployeeService } from 'src/employee/employee.service';
import { CreateEmployeeDto } from 'src/employee/dto/create-employee.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly tokenService: TokenService,
    private readonly employeeService: EmployeeService,
  ) {}

  async register({ password, ...employeeData }: CreateEmployeeDto) {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _, ...safeUser } = await this.employeeService.create({
      ...employeeData,
      password: hashedPassword,
    });

    return safeUser;
  }

  async logIn({ email, password }: LoginDto) {
    const user = await this.employeeService.findOneByEmail(email);

    if (!user) {
      throw new BadRequestException('Invalid credentials');
    }

    const { password: hashedPassword } = user;
    const isPasswordMatch = await bcrypt.compare(password, hashedPassword);

    if (!isPasswordMatch) {
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

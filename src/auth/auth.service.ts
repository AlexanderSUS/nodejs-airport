import {
  BadRequestException,
  HttpStatus,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { TokenService } from './token.service';
import { EmployeesService } from 'src/employees/employees.service';
import { CreateEmployeeDto } from 'src/employees/dto/create-employee.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly tokenService: TokenService,
    private readonly employeesService: EmployeesService,
  ) {}

  async register({ password, ...employeeData }: CreateEmployeeDto) {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _, ...safeUser } = await this.employeesService.create({
      ...employeeData,
      password: hashedPassword,
    });

    return safeUser;
  }

  async logIn({ email, password }: LoginDto) {
    try {
      const user = await this.employeesService.findOneByEmail(email);

      const { password: hashedPassword } = user;
      const isPasswordMatch = await bcrypt.compare(password, hashedPassword);

      if (!isPasswordMatch) {
        throw new NotFoundException();
      }

      return this.tokenService.getTokens(user.id);
    } catch (err) {
      if ('status' in err && err.status === HttpStatus.NOT_FOUND) {
        throw new BadRequestException('Invalid credentials');
      }

      throw err;
    }
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

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Credentials } from './dtos/Credentials';
import { PasswordService } from './password.service';
import { TokenService } from './token.service';
import { UserInfo } from './dtos/UserInfo';
import { UserService } from '../user/user.service';
import { Prisma } from '@prisma/client';
import { UserCreateInput } from '../user/dtos/UserCreateInput';
import { Role } from '../user/dtos/User';

@Injectable()
export class AuthService {
  constructor(
    private readonly passwordService: PasswordService,
    private readonly tokenService: TokenService,
    private readonly userService: UserService,
  ) {}

  async validateUser(
    username: string,
    password: string,
  ): Promise<UserInfo | null> {
    const user = await this.userService.user({
      where: { username },
    });

    if (user && (await this.passwordService.compare(password, user.password))) {
      const { id, role } = user;

      return { id, username, role: role as Role };
    }
    return null;
  }

  async register(createUserDto: UserCreateInput): Promise<UserInfo> {
    const { email, username, password } = createUserDto;

    const existingUser = await this.userService.user({
      where: { email },
    });

    if (existingUser) {
      throw new UnauthorizedException('Email already exists');
    }

    const newUser = await this.userService.createUser({
      data: {
        ...createUserDto,
        email: email,
        username: username,
        password: password,
        role: Role.User,
      },
    });

    const { id, role } = newUser;

    const accessToken = await this.tokenService.createToken({
      id,
      username,
      password,
    });

    return {
      accessToken,
      id,
      username,
      role: role as Role,
    };
  }

  async login(credentials: Credentials): Promise<UserInfo> {
    const { username, password } = credentials;
    const user = await this.validateUser(
      credentials.username,
      credentials.password,
    );

    if (!user) {
      throw new UnauthorizedException('Your credentials are incorrect');
    }
    const accessToken = await this.tokenService.createToken({
      id: user.id,
      username,
      password,
    });
    return {
      accessToken,
      ...user,
    };
  }
}

import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { Credentials } from './dtos/Credentials';
import { UserInfo } from './dtos/UserInfo';
import { UserCreateInput } from '../user/dtos/UserCreateInput';

@ApiTags('auth')
@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() body: Credentials): Promise<UserInfo> {
    return this.authService.login(body);
  }

  @Post('register')
  async register(@Body() createUserDto: UserCreateInput) {
    return this.authService.register(createUserDto);
  }
}

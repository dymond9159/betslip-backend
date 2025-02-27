import { UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { IAuthStrategy } from '../../basic/IAuthStrategy';
import { UserInfo } from '../../dtos/UserInfo';
import { UserService } from '../../../user/user.service';
import { Role } from 'src/modules/user/dtos/User';

export class JwtStrategyBase
  extends PassportStrategy(Strategy)
  implements IAuthStrategy
{
  constructor(
    protected readonly secretOrKey: string,
    protected readonly userService: UserService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey,
    });
  }

  async validate(payload: UserInfo): Promise<UserInfo> {
    const { username } = payload;
    const user = await this.userService.user({
      where: { username },
    });
    if (!user) {
      throw new UnauthorizedException();
    }
    if (!Array.isArray(user.role) || user.role === null) {
      throw new Error('User role is not a valid value');
    }
    return {
      ...user,
      username: user.username || '',
      role: user.role as Role,
    };
  }
}

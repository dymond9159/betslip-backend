import { Inject, Injectable } from '@nestjs/common';
import { JwtStrategyBase } from './base/jwt.strategy.base';
import { UserService } from 'src/modules/user/user.service';
import { JWT_SECRET_KEY_PROVIDER_NAME } from 'src/modules/shared/constants';

@Injectable()
export class JwtStrategy extends JwtStrategyBase {
  constructor(
    @Inject(JWT_SECRET_KEY_PROVIDER_NAME) secretOrKey: string,
    protected readonly userService: UserService,
  ) {
    super(secretOrKey, userService);
  }
}

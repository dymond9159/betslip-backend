import * as common from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import * as gqlACGuard from './guards/gqlAC.guard';
import { AuthService } from './auth.service';
import { GqlDefaultAuthGuard } from './guards/gqlDefaultAuth.guard';
import { UserData } from './decorators/userData.decorator';
import { LoginArgs } from './dtos/LoginArgs';
import { UserInfo } from './dtos/UserInfo';
import { CreateUserArgs } from '../user/dtos/CreateUserArgs';

@Resolver(UserInfo)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => UserInfo)
  async login(@Args() args: LoginArgs): Promise<UserInfo> {
    return this.authService.login(args.credentials);
  }

  /**
   * GraphQL Mutation for user registration
   * @param data The input object for user registration
   * @returns UserInfo - details of the newly created user
   */
  @Mutation(() => UserInfo)
  async register(@Args() args: CreateUserArgs): Promise<UserInfo> {
    return this.authService.register(args.data);
  }

  @Query(() => UserInfo)
  @common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
  async userInfo(@UserData() entityInfo: UserInfo): Promise<UserInfo> {
    return entityInfo;
  }
}

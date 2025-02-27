import * as common from '@nestjs/common';
import * as graphql from '@nestjs/graphql';
import * as nestAccessControl from 'nest-access-control';

import * as gqlACGuard from '../auth/guards/gqlAC.guard';
import { GqlDefaultAuthGuard } from '../auth/guards/gqlDefaultAuth.guard';
import { UserService } from './user.service';
import { User } from './dtos/User';

import { AclValidateRequestInterceptor } from '../common/interceptors/aclValidateRequest.interceptor';

import { CreateUserArgs } from './dtos/CreateUserArgs';

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => User)
export class UserResolver {
  constructor(
    protected readonly service: UserService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder,
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => User)
  @nestAccessControl.UseRoles({
    resource: 'User',
    action: 'create',
    possession: 'any',
  })
  async createUser(@graphql.Args() args: CreateUserArgs): Promise<User> {
    const user = await this.service.createUser({
      ...args,
      data: args.data,
    });
    return user as User;
  }
}

import * as common from '@nestjs/common';
import * as graphql from '@nestjs/graphql';
import * as nestAccessControl from 'nest-access-control';

import * as gqlACGuard from '../auth/guards/gqlAC.guard';
import { GqlDefaultAuthGuard } from '../auth/guards/gqlDefaultAuth.guard';

import { AclFilterResponseInterceptor } from '../common/interceptors/aclFilterResponse.interceptor';
import { AclValidateRequestInterceptor } from '../common/interceptors/aclValidateRequest.interceptor';

import { Bet } from './dtos/Bet';
import { CreateBetArgs } from './dtos/CreateBetArgs';
import { BetFindUniqueArgs } from './dtos/BetFindUniqueArgs';

import { BetService } from './bet.service';

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Bet)
export class BetResolver {
  constructor(
    protected readonly service: BetService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder,
  ) {}

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Bet, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: 'Bet',
    action: 'read',
    possession: 'own',
  })
  async bet(@graphql.Args() args: BetFindUniqueArgs): Promise<Bet | null> {
    const result = await this.service.bet(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Bet)
  @nestAccessControl.UseRoles({
    resource: 'Bet',
    action: 'create',
    possession: 'any',
  })
  async createBet(@graphql.Args() args: CreateBetArgs): Promise<Bet> {
    return await this.service.createBet({
      ...args,
      data: args.data,
    });
  }

  // @common.UseInterceptors(AclValidateRequestInterceptor)
  // @graphql.Mutation(() => Bet)
  // @nestAccessControl.UseRoles({
  //   resource: 'Bet',
  //   action: 'update',
  //   possession: 'any',
  // })
  // async updateBet(@graphql.Args() args: UpdateBetArgs): Promise<Bet | null> {
  //   try {
  //     return await this.service.updateBet({
  //       ...args,
  //       data: args.data,
  //     });
  //   } catch (error) {
  //     if (isRecordNotFoundError(error)) {
  //       throw new GraphQLError(
  //         `No resource was found for ${JSON.stringify(args.where)}`,
  //       );
  //     }
  //     throw error;
  //   }
  // }
}

import { Injectable } from '@nestjs/common';
import { Prisma, Bet as PrismaBet, User as PrismaUser } from '@prisma/client';
import { PrismaService } from 'src/modules/shared/prisma/prisma.service';

@Injectable()
export class BetService {
  constructor(protected readonly prisma: PrismaService) {}

  async bet(args: Prisma.BetFindUniqueArgs): Promise<PrismaBet | null> {
    return this.prisma.bet.findUnique(args);
  }

  async createBet(args: Prisma.BetCreateArgs): Promise<PrismaBet> {
    return this.prisma.bet.create(args);
  }

  async updateBet(args: Prisma.BetUpdateArgs): Promise<PrismaBet> {
    return this.prisma.bet.update(args);
  }
}

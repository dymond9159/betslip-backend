import { Injectable } from '@nestjs/common';
import { Prisma, User as PrismaUser, Bet as PrismaBet } from '@prisma/client';

import { PrismaService } from '../shared/prisma/prisma.service';
import { PasswordService } from '../auth/password.service';

@Injectable()
export class UserService {
  constructor(
    protected readonly prisma: PrismaService,
    protected readonly passwordService: PasswordService,
  ) {}

  async user(args: Prisma.UserFindUniqueArgs): Promise<PrismaUser | null> {
    return this.prisma.user.findUnique(args);
  }

  async createUser(args: Prisma.UserCreateArgs): Promise<PrismaUser> {
    return this.prisma.user.create({
      ...args,

      data: {
        ...args.data,
        password: await this.passwordService.hash(args.data.password),
      },
    });
  }
}

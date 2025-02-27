import { PrismaClient } from '@prisma/client';

export async function customSeed() {
  const client = new PrismaClient();
  const username = 'admin';

  // TODO: complete this codebase to populate the database
  // with data that is required for a service to start

  client.$disconnect();
}

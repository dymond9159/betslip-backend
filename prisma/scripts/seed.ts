import * as dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import { hash } from 'bcrypt';
import { Role } from 'src/modules/user/dtos/User';

if (require.main === module) {
  dotenv.config();

  const { BCRYPT_SALT } = process.env;

  if (!BCRYPT_SALT) {
    throw new Error('BCRYPT_SALT environment variable must be defined');
  }

  seed(BCRYPT_SALT).catch((error) => {
    console.error(error);
    process.exit(1);
  });
}

async function seed(bcryptSalt: string | number) {
  console.info('Seeding database...');

  const client = new PrismaClient();

  const data = {
    username: 'admin',
    email: 'admin@betslip.com',
    password: await hash('admin@123', bcryptSalt),
    role: Role.Admin,
  };

  await client.user.upsert({
    where: {
      username: data.username,
    },
    update: {},
    create: data,
  });

  void client.$disconnect();

  console.info('Seeding database with custom seed...');
}

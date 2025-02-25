import * as dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";

if (require.main === module) {
  dotenv.config();

  const { BCRYPT_SALT } = process.env;

  if (!BCRYPT_SALT) {
    throw new Error("BCRYPT_SALT environment variable must be defined");
  }

  seed(BCRYPT_SALT).catch((error) => {
    console.error(error);
    process.exit(1);
  });
}

async function seed(bcryptSalt: string | number) {
  console.info("Seeding database...");

  const client = new PrismaClient();

  const data = {
    username: "admin",
    password: await hash("admin", bcryptSalt),
    roles: ["user"],
  };

  await client.user.upsert({
    where: {
      username: data.username,
    },
    update: {},
    create: data,
  });

  void client.$disconnect();

  console.info("Seeding database with custom seed...");
}

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';

import { LoggerModule } from './modules/shared/logger/logger.module';
import { PrismaModule } from './modules/shared/prisma/prisma.module';
import { SecretsManagerModule } from './modules/common/providers/secrets/secretsManager.module';
import { ServeStaticOptionsService } from './modules/common/providers/services/serveStaticOptions.service';
import { HealthModule } from './modules/health/health.module';

@Module({
  controllers: [],
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    PrismaModule,
    SecretsManagerModule,
    LoggerModule,
    HealthModule,
  ],
  providers: [],
})
export class AppModule {}

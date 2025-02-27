import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { LoggerModule } from './modules/shared/logger/logger.module';
import { PrismaModule } from './modules/shared/prisma/prisma.module';
import { SecretsManagerModule } from './modules/common/providers/secrets/secretsManager.module';
import { ServeStaticOptionsService } from './modules/common/providers/services/serveStaticOptions.service';

import { HealthModule } from './modules/health/health.module';
import { ACLModule } from './modules/auth/acl.module';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { BetModule } from './modules/bet/bet.module';

@Module({
  controllers: [],
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    LoggerModule,
    PrismaModule,
    SecretsManagerModule,
    ACLModule,
    HealthModule,
    AuthModule,
    UserModule,
    BetModule,
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get('GRAPHQL_PLAYGROUND');
        const introspection = configService.get('GRAPHQL_INTROSPECTION');
        return {
          autoSchemaFile: 'schema.graphql',
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}

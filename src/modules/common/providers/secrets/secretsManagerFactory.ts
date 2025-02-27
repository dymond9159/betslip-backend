import { Provider } from '@nestjs/common';
import { EnumSecretsNameKey } from './secretsNameKey.enum';
import { ConfigService } from '@nestjs/config';

export const SECRETS_MANAGER_PROVIDER_KEY = 'GCP_SECRETS_MANAGER';
export type SecretsType = Partial<Record<EnumSecretsNameKey, unknown>>;

export const SecretsManagerFactory: Provider = {
  provide: SECRETS_MANAGER_PROVIDER_KEY,
  useFactory: async (configService: ConfigService) => {
    const secretKey = configService.get('JWT_SECRET_KEY');
    var secrets: SecretsType = {};
    secrets[EnumSecretsNameKey.JwtSecretKey] =
      secretKey || '1385324abf0674c104bdc86cc1549271';

    return secrets;
  },
  inject: [ConfigService],
};

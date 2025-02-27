import { SecretsManagerService } from 'src/modules/common/providers/secrets/secretsManager.service';
import { EnumSecretsNameKey } from 'src/modules/common/providers/secrets/secretsNameKey.enum';
import { JWT_SECRET_KEY_PROVIDER_NAME } from 'src/modules/shared/constants';

export const jwtSecretFactory = {
  provide: JWT_SECRET_KEY_PROVIDER_NAME,
  useFactory: async (
    secretsService: SecretsManagerService,
  ): Promise<string> => {
    const secret = await secretsService.getSecret<string>(
      EnumSecretsNameKey.JwtSecretKey,
    );
    if (secret) {
      return secret;
    }
    throw new Error('jwtSecretFactory missing secret');
  },
  inject: [SecretsManagerService],
};

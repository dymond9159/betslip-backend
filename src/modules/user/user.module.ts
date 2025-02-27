import { Module, forwardRef } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { ACLModule } from '../auth/acl.module';

@Module({
  imports: [ACLModule, forwardRef(() => AuthModule)],
  providers: [UserService, UserResolver],
  exports: [UserService],
})
export class UserModule {}

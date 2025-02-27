import { Module, forwardRef } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { ACLModule } from '../auth/acl.module';
import { BetService } from './bet.service';
import { BetResolver } from './bet.resolver';

@Module({
  imports: [ACLModule, forwardRef(() => AuthModule)],
  providers: [BetService, BetResolver],
  exports: [BetService],
})
export class BetModule {}

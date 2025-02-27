import { Field, ObjectType } from '@nestjs/graphql';
import { Role, User } from '../../user/dtos/User';

@ObjectType()
export class UserInfo implements Partial<User> {
  @Field(() => String)
  id!: string;

  @Field(() => String)
  username!: string;

  @Field(() => Role, { nullable: true })
  role?: Role | null;

  @Field(() => String, { nullable: true })
  accessToken?: string;
}

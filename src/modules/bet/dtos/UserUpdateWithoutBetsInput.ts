import { InputType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { UserWhereUniqueInput } from 'src/modules/user/dtos/UserWhereUniqueInput';

@InputType()
class UserUpdateWithoutBetsInput {
  @Field(() => [UserWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [UserWhereUniqueInput],
  })
  connect?: Array<UserWhereUniqueInput>;

  @Field(() => [UserWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [UserWhereUniqueInput],
  })
  disconnect?: Array<UserWhereUniqueInput>;

  @Field(() => [UserWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [UserWhereUniqueInput],
  })
  set?: Array<UserWhereUniqueInput>;
}

export { UserUpdateWithoutBetsInput as UserUpdateWithoutBetsInput };

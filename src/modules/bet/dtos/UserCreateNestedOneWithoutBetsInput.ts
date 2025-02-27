import { InputType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { UserWhereUniqueInput } from 'src/modules/user/dtos/UserWhereUniqueInput';

@InputType()
class UserCreateNestedOneWithoutBetsInput {
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  connect?: UserWhereUniqueInput;
}

export { UserCreateNestedOneWithoutBetsInput as UserCreateNestedOneWithoutBetsInput };

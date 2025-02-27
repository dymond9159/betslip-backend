import { InputType, Field } from '@nestjs/graphql';
import { BetWhereUniqueInput } from '../../bet/dtos/BetWhereUniqueInput';
import { ApiProperty } from '@nestjs/swagger';

@InputType()
class BetCreateNestedManyWithoutUsersInput {
  @Field(() => [BetWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [BetWhereUniqueInput],
  })
  connect?: Array<BetWhereUniqueInput>;
}

export { BetCreateNestedManyWithoutUsersInput as BetCreateNestedManyWithoutUsersInput };

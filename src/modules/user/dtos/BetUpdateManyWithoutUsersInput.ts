import { InputType, Field } from '@nestjs/graphql';
import { BetWhereUniqueInput } from '../../bet/dtos/BetWhereUniqueInput';
import { ApiProperty } from '@nestjs/swagger';

@InputType()
class BetUpdateManyWithoutUsersInput {
  @Field(() => [BetWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [BetWhereUniqueInput],
  })
  connect?: Array<BetWhereUniqueInput>;

  @Field(() => [BetWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [BetWhereUniqueInput],
  })
  disconnect?: Array<BetWhereUniqueInput>;

  @Field(() => [BetWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [BetWhereUniqueInput],
  })
  set?: Array<BetWhereUniqueInput>;
}

export { BetUpdateManyWithoutUsersInput as BetUpdateManyWithoutUsersInput };

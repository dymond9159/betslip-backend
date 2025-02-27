import { ArgsType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { BetWhereUniqueInput } from './BetWhereUniqueInput';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { BetUpdateInput } from './BetUpdateInput';

@ArgsType()
class UpdateBetArgs {
  @ApiProperty({
    required: true,
    type: () => BetWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BetWhereUniqueInput)
  @Field(() => BetWhereUniqueInput, { nullable: false })
  where!: BetWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => BetUpdateInput,
  })
  @ValidateNested()
  @Type(() => BetUpdateInput)
  @Field(() => BetUpdateInput, { nullable: false })
  data!: BetUpdateInput;
}

export { UpdateBetArgs as UpdateBetArgs };

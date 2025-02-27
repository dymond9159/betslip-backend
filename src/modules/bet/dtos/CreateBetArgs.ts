import { ArgsType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { BetCreateInput } from './BetCreateInput';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

@ArgsType()
class CreateBetArgs {
  @ApiProperty({
    required: true,
    type: () => BetCreateInput,
  })
  @ValidateNested()
  @Type(() => BetCreateInput)
  @Field(() => BetCreateInput, { nullable: false })
  data!: BetCreateInput;
}

export { CreateBetArgs as CreateBetArgs };

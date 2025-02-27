import { ArgsType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { BetWhereUniqueInput } from './BetWhereUniqueInput';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

@ArgsType()
class DeleteBetArgs {
  @ApiProperty({
    required: true,
    type: () => BetWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BetWhereUniqueInput)
  @Field(() => BetWhereUniqueInput, { nullable: false })
  where!: BetWhereUniqueInput;
}

export { DeleteBetArgs as DeleteBetArgs };

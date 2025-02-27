import { InputType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { BetWhereInput } from './BetWhereInput';
import { ValidateNested, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

@InputType()
class BetListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => BetWhereInput,
  })
  @ValidateNested()
  @Type(() => BetWhereInput)
  @IsOptional()
  @Field(() => BetWhereInput, {
    nullable: true,
  })
  every?: BetWhereInput;

  @ApiProperty({
    required: false,
    type: () => BetWhereInput,
  })
  @ValidateNested()
  @Type(() => BetWhereInput)
  @IsOptional()
  @Field(() => BetWhereInput, {
    nullable: true,
  })
  some?: BetWhereInput;

  @ApiProperty({
    required: false,
    type: () => BetWhereInput,
  })
  @ValidateNested()
  @Type(() => BetWhereInput)
  @IsOptional()
  @Field(() => BetWhereInput, {
    nullable: true,
  })
  none?: BetWhereInput;
}
export { BetListRelationFilter as BetListRelationFilter };

import { InputType, Field, Float } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
  IsNumber,
  Max,
} from 'class-validator';
import { UserUpdateWithoutBetsInput } from './UserUpdateWithoutBetsInput';
import { Type } from 'class-transformer';
import { Decimal } from 'decimal.js';

@InputType()
class BetUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(5)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  currency?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1024)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  outcomes?: string | null;

  @ApiProperty({
    required: false,
    type: () => UserUpdateWithoutBetsInput,
  })
  @ValidateNested()
  @Type(() => UserUpdateWithoutBetsInput)
  @IsOptional()
  @Field(() => UserUpdateWithoutBetsInput, {
    nullable: true,
  })
  user?: UserUpdateWithoutBetsInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Max(99999999999)
  @IsOptional()
  @Field(() => Float, {
    nullable: true,
  })
  wagerAmount?: Decimal | null;
}

export { BetUpdateInput as BetUpdateInput };

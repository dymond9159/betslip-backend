import { ObjectType, Field, Float } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsDate,
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
  IsNumber,
  Max,
} from 'class-validator';
import { Decimal } from 'decimal.js';
import { Type } from 'class-transformer';

import { User } from '../../user/dtos/User';

@ObjectType()
class Bet {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

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
  currency!: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

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
  outcomes!: string | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
    type: () => [User],
  })
  @ValidateNested()
  @Type(() => User)
  @IsOptional()
  user?: Array<User>;

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
  wagerAmount!: Decimal | null;
}

export { Bet as Bet };

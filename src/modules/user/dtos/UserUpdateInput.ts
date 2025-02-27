import { InputType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsOptional,
  ValidateNested,
  MaxLength,
  IsEnum,
} from 'class-validator';
import { BetUpdateManyWithoutUsersInput } from './BetUpdateManyWithoutUsersInput';
import { Type } from 'class-transformer';
import { Role } from './User';

@InputType()
class UserUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  address?: string | null;

  @ApiProperty({
    required: false,
    type: () => BetUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => BetUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => BetUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  bets?: BetUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  password?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  photo?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsEnum(Role)
  @IsOptional()
  @Field(() => Role, {
    nullable: true,
  })
  role?: Role;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  username?: string | null;
}

export { UserUpdateInput as UserUpdateInput };

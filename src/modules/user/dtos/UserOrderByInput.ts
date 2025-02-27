import { InputType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsEnum } from 'class-validator';
import { SortOrder } from 'src/modules/shared/util/SortOrder';

@InputType({
  isAbstract: true,
  description: undefined,
})
class UserOrderByInput {
  @ApiProperty({
    required: false,
    enum: ['asc', 'desc'],
  })
  @IsOptional()
  @IsEnum(SortOrder)
  @Field(() => SortOrder, {
    nullable: true,
  })
  address?: SortOrder;

  @ApiProperty({
    required: false,
    enum: ['asc', 'desc'],
  })
  @IsOptional()
  @IsEnum(SortOrder)
  @Field(() => SortOrder, {
    nullable: true,
  })
  createdAt?: SortOrder;

  @ApiProperty({
    required: false,
    enum: ['asc', 'desc'],
  })
  @IsOptional()
  @IsEnum(SortOrder)
  @Field(() => SortOrder, {
    nullable: true,
  })
  email?: SortOrder;

  @ApiProperty({
    required: false,
    enum: ['asc', 'desc'],
  })
  @IsOptional()
  @IsEnum(SortOrder)
  @Field(() => SortOrder, {
    nullable: true,
  })
  firstName?: SortOrder;

  @ApiProperty({
    required: false,
    enum: ['asc', 'desc'],
  })
  @IsOptional()
  @IsEnum(SortOrder)
  @Field(() => SortOrder, {
    nullable: true,
  })
  id?: SortOrder;

  @ApiProperty({
    required: false,
    enum: ['asc', 'desc'],
  })
  @IsOptional()
  @IsEnum(SortOrder)
  @Field(() => SortOrder, {
    nullable: true,
  })
  lastName?: SortOrder;

  @ApiProperty({
    required: false,
    enum: ['asc', 'desc'],
  })
  @IsOptional()
  @IsEnum(SortOrder)
  @Field(() => SortOrder, {
    nullable: true,
  })
  password?: SortOrder;

  @ApiProperty({
    required: false,
    enum: ['asc', 'desc'],
  })
  @IsOptional()
  @IsEnum(SortOrder)
  @Field(() => SortOrder, {
    nullable: true,
  })
  photo?: SortOrder;

  @ApiProperty({
    required: false,
    enum: ['asc', 'desc'],
  })
  @IsOptional()
  @IsEnum(SortOrder)
  @Field(() => SortOrder, {
    nullable: true,
  })
  role?: SortOrder;

  @ApiProperty({
    required: false,
    enum: ['asc', 'desc'],
  })
  @IsOptional()
  @IsEnum(SortOrder)
  @Field(() => SortOrder, {
    nullable: true,
  })
  updatedAt?: SortOrder;

  @ApiProperty({
    required: false,
    enum: ['asc', 'desc'],
  })
  @IsOptional()
  @IsEnum(SortOrder)
  @Field(() => SortOrder, {
    nullable: true,
  })
  username?: SortOrder;
}

export { UserOrderByInput as UserOrderByInput };

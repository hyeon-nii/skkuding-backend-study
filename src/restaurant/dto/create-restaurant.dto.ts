// src/restaurant/dto/create-restaurant.dto.ts

import { InputType, Field } from '@nestjs/graphql';
import { IsString, IsNotEmpty } from 'class-validator';

@InputType() // GraphQL의 Input 타입으로 지정
export class CreateRestaurantDto {
  @Field() // GraphQL 필드
  @IsString() // 유효성 검사 (기존 유지)
  @IsNotEmpty()
  name: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  address: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  phone: string;
}
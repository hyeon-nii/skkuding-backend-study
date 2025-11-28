// src/restaurant/entities/restaurant.entity.ts

import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType() // 이 클래스는 GraphQL의 'Type'이 됩니다.
export class Restaurant {
  @Field(() => Int) // GraphQL Int 타입
  id: number;

  @Field() // 기본적으로 String 타입
  name: string;

  @Field()
  address: string;

  @Field()
  phone: string;

  // createdAt, updatedAt은 선택사항이지만 있으면 좋습니다.
  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
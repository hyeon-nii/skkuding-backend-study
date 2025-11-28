// src/restaurant/restaurant.resolver.ts

import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { RestaurantService } from './restaurant.service';
import { Restaurant } from './entities/restaurant.entity';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';

@Resolver(() => Restaurant)
export class RestaurantResolver {
  constructor(private readonly restaurantService: RestaurantService) {}

  // GET 대신 Query (전체 조회)
  @Query(() => [Restaurant])
  async getAllRestaurants(): Promise<Restaurant[]> {
    return this.restaurantService.findAll();
  }

  // GET 대신 Query (단일 조회)
  @Query(() => Restaurant)
  async getRestaurant(@Args('name', { type: () => String }) name: string): Promise<Restaurant | null> {
    return this.restaurantService.findOne(name);
  }

  // POST 대신 Mutation (생성)
  @Mutation(() => Restaurant)
  async createRestaurant(
    @Args('createRestaurantInput') createData: CreateRestaurantDto,
  ): Promise<Restaurant> {
    return this.restaurantService.create(createData);
  }

  // DELETE 대신 Mutation (삭제) -> 리턴타입은 삭제된 정보 혹은 Boolean 등 자유롭게 설정
  @Mutation(() => Restaurant)
  async deleteRestaurant(@Args('name') name: string): Promise<Restaurant> {
    return this.restaurantService.remove(name);
  }
}
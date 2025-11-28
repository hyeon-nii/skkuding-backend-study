// src/restaurant/restaurant.service.spec.ts

import { Test, TestingModule } from '@nestjs/testing';
import { RestaurantService } from './restaurant.service';
import { Restaurant, Restaurants } from './restaurant.model'; // 데이터와 타입 import

describe('RestaurantService', () => {
  let service: RestaurantService;

  // 각 테스트 이전에 모듈을 초기화한다.
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RestaurantService],
    }).compile();

    service = module.get<RestaurantService>(RestaurantService);
    // [참고] 메모리 데이터를 테스트마다 초기화해야 하지만, 현재는 전역 Restaurants를 사용한다.
  });

  // 서비스가 정의되었는지 확인하는 테스트이다.
  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // GET All 테스트이다.
  it('should return all restaurant data', () => {
    const result = service.findAll();
    expect(result).toBeInstanceOf(Array);
    expect(result.length).toBeGreaterThan(0); // 초기 데이터가 있어야 한다.
  });

  // POST (생성 성공) 테스트이다.
  it('should successfully create a new restaurant and return it', () => {
    const newRestaurant: Restaurant = {
      name: '테스트 생성 맛집',
      address: '테스트 주소',
      phone: '000-000-0000',
    };
    const initialCount = Restaurants.length;
    
    const result = service.create(newRestaurant);
    
    expect(result).toEqual(newRestaurant);
    expect(Restaurants.length).toBe(initialCount + 1); // 배열 길이가 1 증가했는지 확인한다.
  });

  // POST (중복 생성 실패) 테스트이다.
  it('should return null when creating a duplicate restaurant', () => {
    const existingRestaurant: Restaurant = Restaurants[0]; // 봉수육 데이터를 사용한다.
    const result = service.create(existingRestaurant);
    
    expect(result).toBeNull(); // 중복 생성 시 null을 반환해야 한다.
  });
});
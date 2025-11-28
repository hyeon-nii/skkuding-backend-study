// src/restaurant/restaurant.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Restaurant } from '@prisma/client'; // DB 테이블 타입 가져오기

@Injectable()
export class RestaurantService {
  // 생성자에서 PrismaService 주입 (DB 연결 도구 장착)
  constructor(private prisma: PrismaService) {}

  // 1. 전체 조회 (GET)
  async findAll(): Promise<Restaurant[]> {
    return await this.prisma.restaurant.findMany();
  }

  // 2. 단일 조회 (GET)
  async findOne(name: string): Promise<Restaurant | null> {
    return await this.prisma.restaurant.findUnique({
      where: { name }, // name이 유니크 키라서 가능
    });
  }

  // 3. 생성 (POST)
  async create(data: { name: string; address: string; phone: string }): Promise<Restaurant> {
    return await this.prisma.restaurant.create({
      data,
    });
  }

  // 4. 수정 (PATCH)
  async update(name: string, updateData: Partial<Restaurant>): Promise<Restaurant> {
    return await this.prisma.restaurant.update({
      where: { name },
      data: updateData,
    });
  }

  // 5. 삭제 (DELETE)
  async remove(name: string): Promise<Restaurant> {
    return await this.prisma.restaurant.delete({
      where: { name },
    });
  }
}
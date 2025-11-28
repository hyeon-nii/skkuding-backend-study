import { Module } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { RestaurantResolver } from './restaurant.resolver'; // Resolver 임포트
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [
    RestaurantService, 
    RestaurantResolver // Controller 대신(혹은 같이) Resolver를 Providers에 넣습니다.
  ],
  imports: [PrismaModule],
})
export class RestaurantModule {}
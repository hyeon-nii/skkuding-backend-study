import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { RestaurantModule } from './restaurant/restaurant.module';
import { PrismaModule } from './prisma/prisma.module';
import { join } from 'path';

@Module({
  imports: [
    // GraphQL 모듈 설정 (Code First 방식)
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      // 스키마 파일을 자동으로 생성할 경로 지정
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      // Playgroud(테스트 GUI) 켜기
      playground: true, 
    }),
    RestaurantModule,
    PrismaModule,
  ],
})
export class AppModule {}
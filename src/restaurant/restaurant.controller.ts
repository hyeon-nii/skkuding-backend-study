import { 
    Controller, Get, Post, Body, Patch, Param, Delete, 
    NotFoundException, ConflictException, HttpCode, HttpStatus, 
    UsePipes, ValidationPipe, BadRequestException 
} from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
// Prisma가 생성한 타입을 사용하기 위해 @prisma/client에서 가져옵니다. 
// (기존 model.ts 대신 실제 DB 타입을 쓰는 것이 좋습니다)
import { Restaurant } from '@prisma/client'; 
import { CreateRestaurantDto } from './dto/create-restaurant.dto'; 

@Controller('restaurant')
export class RestaurantController {
  constructor(private readonly restaurantService: RestaurantService) {}

  // POST /restaurant (생성)
  @Post()
  @HttpCode(HttpStatus.CREATED)
  @UsePipes(ValidationPipe)
  // async 추가, 반환 타입 Promise<Restaurant>로 변경
  async create(@Body() createData: CreateRestaurantDto): Promise<Restaurant> { 
    const created = await this.restaurantService.create(createData);
    
    // Prisma는 중복 에러를 내부적으로 던지지만, 일단직접 처리 로직을 유지한다면 try-catch가 필요할 수 있습니다.
    // 여기서는 간단히 반환합니다. (Prisma가 에러를 내면 NestJS가 500으로 처리함)
    return created;
  }

  // GET /restaurant (전체 조회)
  @Get()
  async findAll(): Promise<Restaurant[]> { // async, Promise<Restaurant[]>
    return this.restaurantService.findAll();
  }

  // GET /restaurant/:name (단일 조회)
  @Get(':name')
  async findOne(@Param('name') name: string): Promise<Restaurant> { // async, Promise<Restaurant>
    const restaurant = await this.restaurantService.findOne(name);
    
    if (!restaurant) {
      throw new NotFoundException(`맛집 정보 "${name}"를 찾을 수 없습니다.`);
    }
    return restaurant;
  }
  
  // PATCH /restaurant/:name (수정)
  @Patch(':name')
  @UsePipes(ValidationPipe)
  async update(@Param('name') name: string, @Body() updateData: Partial<Restaurant>): Promise<Restaurant> {
    if (Object.keys(updateData).length === 0) {
      throw new BadRequestException("수정할 데이터가 없습니다.");
    }
    
    // update가 실패하면 Prisma가 에러를 던질 수 있음
    try {
        const updated = await this.restaurantService.update(name, updateData);
        return updated;
    } catch (e) {
        throw new NotFoundException(`맛집 정보 "${name}"를 찾을 수 없습니다.`);
    }
  }

  // DELETE /restaurant/:name (삭제)
  @Delete(':name')
  async remove(@Param('name') name: string): Promise<Restaurant> {
    try {
        const deleted = await this.restaurantService.remove(name);
        return deleted;
    } catch (e) {
        throw new NotFoundException(`맛집 정보 "${name}"를 찾을 수 없습니다.`);
    }
  }
}
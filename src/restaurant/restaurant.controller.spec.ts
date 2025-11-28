import { Test, TestingModule } from '@nestjs/testing';
import { RestaurantController } from './restaurant.controller';
import { RestaurantService } from './restaurant.service';
import { NotFoundException, ConflictException } from '@nestjs/common';
import type { Restaurant } from './restaurant.model'; // 타입 import

// Service의 메서드를 모의(Mock) 구현하기 위한 클래스 정의
const mockRestaurantService = {
  findAll: jest.fn(),
  findOne: jest.fn(),
  create: jest.fn(),
  update: jest.fn(),
  remove: jest.fn(),
};

describe('RestaurantController', () => {
  let controller: RestaurantController;
  let service: RestaurantService;

  beforeEach(async () => {
    // Test Module을 설정하여 컨트롤러와 모킹된 서비스를 연결합니다.
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RestaurantController],
      providers: [
        {
          // 실제 RestaurantService 대신 모킹 객체를 사용하도록 NestJS에 지시
          provide: RestaurantService,
          useValue: mockRestaurantService,
        },
      ],
    }).compile();

    controller = module.get<RestaurantController>(RestaurantController);
    service = module.get<RestaurantService>(RestaurantService); // 모킹 객체의 jest.fn()에 접근하기 위해 사용

    // 테스트가 시작될 때마다 모든 jest.fn()의 호출 기록을 초기화합니다.
    jest.clearAllMocks(); 
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  // --- GET All Test ---
  it('should call findAll on the service and return a list', () => {
    // Arrange: Service의 findAll 메서드가 반환할 값 설정
    const result: Restaurant[] = [{ name: 'Test', address: 'Addr', phone: '000' }];
    mockRestaurantService.findAll.mockReturnValue(result);

    // Act & Assert: Controller 메서드를 호출하고 반환 값이 예상과 같은지 확인
    expect(controller.findAll()).toEqual(result);
    expect(service.findAll).toHaveBeenCalledTimes(1);
  });

  // --- GET Single (Success) Test ---
  it('should call findOne on the service and return a single restaurant', () => {
    const name = '봉수육';
    const result: Restaurant = { name: name, address: 'Addr', phone: '000' };
    mockRestaurantService.findOne.mockReturnValue(result);

    // Act & Assert
    expect(controller.findOne(name)).toEqual(result);
    expect(service.findOne).toHaveBeenCalledWith(name);
  });

  // --- GET Single (Not Found) Test ---
  it('should throw NotFoundException if restaurant is not found', () => {
    const name = '없는맛집';
    mockRestaurantService.findOne.mockReturnValue(undefined); // Service가 null 또는 undefined 반환

    // Act & Assert: 예외(Exception)가 발생하는지 확인
    expect(() => controller.findOne(name)).toThrow(NotFoundException);
    expect(service.findOne).toHaveBeenCalledWith(name);
  });
  
  // --- POST (Success) Test ---
  it('should call create on the service and return the created restaurant (201)', () => {
    const createData = { name: '새맛집', address: 'New', phone: '111' };
    mockRestaurantService.create.mockReturnValue(createData);

    // Act & Assert
    expect(controller.create(createData as Restaurant)).toEqual(createData);
    expect(service.create).toHaveBeenCalledWith(createData);
  });

  // --- POST (Conflict) Test ---
  it('should throw ConflictException if restaurant already exists', () => {
    const createData = { name: '봉수육', address: 'New', phone: '111' };
    mockRestaurantService.create.mockReturnValue(null); // Service가 null 반환 (중복 실패)

    // Act & Assert
    expect(() => controller.create(createData as Restaurant)).toThrow(ConflictException);
    expect(service.create).toHaveBeenCalledWith(createData);
  });

  // --- DELETE Test ---
  it('should call remove and return the deleted object', () => {
    const name = '삭제맛집';
    const deleted: Restaurant = { name: name, address: 'Old', phone: '222' };
    mockRestaurantService.remove.mockReturnValue(deleted);

    // Act & Assert
    expect(controller.remove(name)).toEqual(deleted);
    expect(service.remove).toHaveBeenCalledWith(name);
  });

  // --- DELETE (Not Found) Test ---
  it('should throw NotFoundException on remove if not found', () => {
    const name = '없는맛집';
    mockRestaurantService.remove.mockReturnValue(null); // Service가 null 반환

    // Act & Assert
    expect(() => controller.remove(name)).toThrow(NotFoundException);
    expect(service.remove).toHaveBeenCalledWith(name);
  });
});
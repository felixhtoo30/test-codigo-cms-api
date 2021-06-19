import { Test, TestingModule } from '@nestjs/testing';
import { PayMethodController } from './pay-method.controller';

describe('PayMethodController', () => {
  let controller: PayMethodController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PayMethodController],
    }).compile();

    controller = module.get<PayMethodController>(PayMethodController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

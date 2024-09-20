import { Test, TestingModule } from '@nestjs/testing';
import { ExcalidrawController } from './excalidraw.controller';

describe('ExcalidrawController', () => {
  let controller: ExcalidrawController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExcalidrawController],
    }).compile();

    controller = module.get<ExcalidrawController>(ExcalidrawController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { ExcalidrawService } from './excalidraw.service';

describe('ExcalidrawService', () => {
  let service: ExcalidrawService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExcalidrawService],
    }).compile();

    service = module.get<ExcalidrawService>(ExcalidrawService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { YoutubeController } from './youtube.controller';
import { YoutubeService } from './youtube.service';

describe('YoutubeController', () => {
  let controller: YoutubeController;
  let service: YoutubeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [YoutubeController],
      providers: [
        {
          provide: YoutubeService,
          useValue: {
            downloadVideo: jest.fn().mockResolvedValue('some-url'),
          },
        },
      ],
    }).compile();

    controller = module.get<YoutubeController>(YoutubeController);
    service = module.get<YoutubeService>(YoutubeService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Controller, Get, Query } from '@nestjs/common';
import { YoutubeService } from './youtube.service';

@Controller('youtube')
export class YoutubeController {
  constructor(private readonly youtubeService: YoutubeService) {}

  @Get('download')
  async downloadVideo(@Query('url') url: string) {
    return await this.youtubeService.downloadVideo(url);
  }
}

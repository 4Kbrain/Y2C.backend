import { Injectable } from '@nestjs/common';
import * as ytdl from 'ytdl-core';

@Injectable()
export class YoutubeService {
  async downloadVideo(url: string): Promise<string> {
    if (!ytdl.validateURL(url)) {
      throw new Error('Invalid YouTube URL');
    }

    const info = await ytdl.getInfo(url);
    const format = ytdl.chooseFormat(info.formats, { quality: 'highest' });

    return format.url;
  }
}

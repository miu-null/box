import {
  Controller,
  Get,
  Post,
  Req,
  Res,
  Body,
  Redirect,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateCommentDto } from './dto/comments.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  async writeComment(@Body() data: CreateCommentDto) {
    return this.appService.writeComment(data.Account, data.Comment, data.Date);
  }
}

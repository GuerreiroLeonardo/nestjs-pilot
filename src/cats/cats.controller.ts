import {
  Bind,
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Query,
  Redirect,
  Req,
} from '@nestjs/common';
import { CreateCatDto } from './create-cat-dto';

@Controller('cats')
export class CatsController {
  @Post()
  @HttpCode(204)
  async create(@Body() createCatDto: CreateCatDto) {
    return 'This action adds a new cat';
  }

  @Get()
  @Bind(Req())
  @Redirect('https://nestjs.com', 301)
  async findAll(): Promise<any[]> {
    return [];
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    console.log(id);
    return `This action returns a #${id} cat`;
  }

  @Get('docs')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }
}

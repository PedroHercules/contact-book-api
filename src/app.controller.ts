import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHello() {
    return {
      api: 'Contact book API',
      version: '1.0.0',
    };
  }
}

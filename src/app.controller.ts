import { Controller, Get, Post, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('selectedItem')
  selectedItem() {
    
  } 

  @Get('adatMegadas')
  @Render('adatmegadas')
  adatMegadasa() {
    return {
      errors: [],
      data: {}
    }
  }

  @Post('adatMegadas')
  adatMegadas() {
    if()
  }

}

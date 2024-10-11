import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { NewOrderDto, newOrderDto } from './newOrder.dto';

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
      errors: []
    }
  }

  @Post('adatMegadas')
  adatMegadas(
    @Body() newOrderDto: NewOrderDto) {
    const errors: string[] = [];
    if (!newOrderDto.name || !newOrderDto.iranyitoSzam || !newOrderDto.szaml_orszag) {
      errors.push("Minden mezőt kötelező megadni!")
    }

    if (newOrderDto.kuponkod && /^[A-Z]{2}-\d{4}$/) { //létezik és NN-000
      errors.push("Helytelen kuponkód formátum!")
    }

    if (errors.length > 0) {
      
    }
  }

}

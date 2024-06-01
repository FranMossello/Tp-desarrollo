import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { query } from 'express';

@Controller("app") // prefijo para ingresar localhost:3000/v1/api/app
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("version/:type") //para el query se borra el type
  getVersion(
    @Query() query: { all?: boolean },
    @Param() params:{type:string},
): string | {number: number; date: Date; creator: string} {
    return this.appService.getVersion(query, params);
  }
}

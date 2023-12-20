import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Pokemon } from 'src/database/entities/Pokemon';
import { BaseController } from 'src/shared/core/BaseController';
import { WeatherService } from './weather.service';
import { Type } from 'src/database/entities/Type';

@Controller('weather')
export class WeatherController {
    constructor(private readonly weatherService: WeatherService) {}

    @Get('getAll')
    async getAll(): Promise<Type[]> {
      return await this.weatherService.getAll();
    }
    // @Get('getById/:id')
    // async getById(@Param('id') id: number): Promise<Family> {
    //   return await this.familyService.getById(id);
    // }
  
    @Post('create')
    async create(@Body() type: Type) : Promise<Type> {
      return await this.weatherService.create(type);
    }
  
    @Put('update')
    async update(@Body() type: Type): Promise<Type> {
      return await this.weatherService.update(type);
    }
  
    @Delete('delete/:id')
    async delete(@Param('id') id: number): Promise<any> {
      return await this.weatherService.delete(id);
    }

}

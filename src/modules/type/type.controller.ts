import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Pokemon } from 'src/database/entities/Pokemon';
import { BaseController } from 'src/shared/core/BaseController';
import { TypeService } from './type.service';
import { Type } from 'src/database/entities/Type';

@Controller('type')
export class TypeController {
    constructor(private readonly tyeService: TypeService) {}

    @Get('getAll')
    async getAll(): Promise<Type[]> {
      return await this.tyeService.getAll();
    }
    // @Get('getById/:id')
    // async getById(@Param('id') id: number): Promise<Family> {
    //   return await this.familyService.getById(id);
    // }
  
    @Post('create')
    async create(@Body() type: Type) : Promise<Type> {
      return await this.tyeService.create(type);
    }
  
    @Put('update')
    async update(@Body() type: Type): Promise<Type> {
      return await this.tyeService.update(type);
    }
  
    @Delete('delete/:id')
    async delete(@Param('id') id: number): Promise<any> {
      return await this.tyeService.delete(id);
    }

}

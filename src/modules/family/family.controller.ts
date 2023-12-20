import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Pokemon } from 'src/database/entities/Pokemon';
import { BaseController } from 'src/shared/core/BaseController';
import { FamilyService } from './family.service';
import { Family } from 'src/database/entities/Family';

@Controller('family')
export class FamilyController {
    constructor(private readonly familyService: FamilyService) {}

    @Get('getAll')
    async getAll(): Promise<Family[]> {
      return await this.familyService.getAll();
    }
    // @Get('getById/:id')
    // async getById(@Param('id') id: number): Promise<Family> {
    //   return await this.familyService.getById(id);
    // }
  
    @Post('create')
    async create(@Body() family: Family) : Promise<Family> {
      return await this.familyService.create(family);
    }
  
    @Put('update')
    async update(@Body() family: Family): Promise<Family> {
      return await this.familyService.update(family);
    }
  
    @Delete('delete/:id')
    async delete(@Param('id') id: number): Promise<any> {
      return await this.familyService.delete(id);
    }

}

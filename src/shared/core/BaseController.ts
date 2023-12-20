import { Body, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BaseService } from './BaseService';

export class BaseController<T> {
    service: BaseService<T>;

  @Get('getAll')
  async getAll(): Promise<T[]> {
    return await this.service.getAll();
  }

//   @Get('getById/:id')
//   async getById(@Param('id') id: number): Promise<T> {
//     return await this.service.getById(id);
//   }

  @Post('create')
  async create(@Body() entity: T) : Promise<T> {
    return await this.service.create(entity);
  }

  @Put('update')
  async update(@Body() entity: T): Promise<T> {
    return await this.service.update(entity);
  }

  @Delete('delete/:id')
  async delete(@Param('id') id: number): Promise<any> {
    return await this.service.delete(id);
  }

}

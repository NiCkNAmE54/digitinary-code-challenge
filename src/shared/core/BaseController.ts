import { Body, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BaseService } from './BaseService';


/**
 * A generic base controller class providing common CRUD endpoints.
 * I didn't use it currently because it because swagger can't read the cotrollers correctly
 */
export class BaseController<T> {

  // Service instance that handles the business logic for CRUD operations.
  service: BaseService<T>;

  // GET endpoint to retrieve all entities.
  @Get('getAll')
  async getAll(): Promise<T[]> {
    return await this.service.getAll();
  }

  //   @Get('getById/:id')
  //   async getById(@Param('id') id: number): Promise<T> {
  //     return await this.service.getById(id);
  //   }

  // POST endpoint to create a new entity.
  @Post('create')
  async create(@Body() entity: T) : Promise<T> {
    return await this.service.create(entity);
  }

  // PUT endpoint to update an existing entity.
  @Put('update')
  async update(@Body() entity: T): Promise<T> {
    return await this.service.update(entity);
  }

  // DELETE endpoint to delete an entity by ID.
  @Delete('delete/:id')
  async delete(@Param('id') id: number): Promise<any> {
    return await this.service.delete(id);
  }

}

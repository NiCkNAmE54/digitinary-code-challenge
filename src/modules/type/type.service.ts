import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Type } from 'src/database/entities/Type';
import { BaseService } from 'src/shared/core/BaseService';
import { Repository } from 'typeorm';

/* 
* This class inherits the BaseService class that provides common CRUD operations
*/
@Injectable()
export class TypeService extends BaseService<Type>{

  constructor(@InjectRepository(Type) private typeRepository: Repository<Type>) {
    super();
    // initiat the repository of the BaseService parent class
    this.repository = typeRepository;
  }


}

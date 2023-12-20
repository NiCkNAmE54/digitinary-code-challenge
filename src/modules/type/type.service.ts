import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Type } from 'src/database/entities/Type';
import { BaseService } from 'src/shared/core/BaseService';
import { Repository } from 'typeorm';

@Injectable()
export class TypeService extends BaseService<Type>{

  constructor(@InjectRepository(Type) private typeRepository: Repository<Type>) {
    super();
    this.repository = typeRepository;
  }


}

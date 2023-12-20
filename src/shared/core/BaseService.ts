import { InjectRepository } from '@nestjs/typeorm';
import { EntityClassOrSchema } from '@nestjs/typeorm/dist/interfaces/entity-class-or-schema.type';
import { ObjectType, Repository } from 'typeorm';

export class BaseService<T> {


  repository: Repository<T>;

  async getAll() : Promise<T[]> {
    return await this.repository.find();
  }

//   async getById(id: number) : Promise<T | undefined> {
//     return await this.repository.findOne({
//         where: {
//             id
//         }
//     });
//   }

  async create(obj: T) : Promise<T> {
    const entity = this.repository.create(obj);
    return await this.repository.save(entity);
  }

  async update(obj: T): Promise<T> {
    return await this.repository.save(obj);
  }

  async delete(id: number): Promise<any> {
    return await this.repository.delete(id);
  }

}

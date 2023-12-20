import { Repository } from 'typeorm';


// A generic base service class that provides common CRUD operations.
export class BaseService<T> {

  // The repository used for database interactions.
  repository: Repository<T>;

  // Retrieves all entities from the database.
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


  // Creates a new entity in the database.
  async create(obj: T) : Promise<T> {
    const entity = this.repository.create(obj);
    return await this.repository.save(entity);
  }

  // Updates an existing entity in the database.
  async update(obj: T): Promise<T> {
    return await this.repository.save(obj);
  }
  
  // Deletes an entity from the database based on its ID.
  async delete(id: number): Promise<any> {
    return await this.repository.delete(id);
  }

}

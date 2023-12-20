import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pokemon } from 'src/database/entities/Pokemon';
import { BaseService } from 'src/shared/core/BaseService';
import { Repository } from 'typeorm';


/* 
* This class inherits the BaseService class that provides common CRUD operations
*/
@Injectable()
export class PokemonService extends BaseService<Pokemon> {

  constructor(@InjectRepository(Pokemon) private pokemonRepository: Repository<Pokemon>) {
    super();
    // initiat the repository of the BaseService parent class
    this.repository = pokemonRepository;
  }


  async find(
    filter: Record<string, any>,
    page: number = 1,
    pageSize: number = 10,
  ): Promise<{ data: Pokemon[]; total: number }> {
    const queryBuilder = this.pokemonRepository.createQueryBuilder('pokemon');

    // Dynamically apply filters
    Object.keys(filter).forEach((key) => {
      const value = filter[key];
      if (value !== undefined && value !== null) {
        queryBuilder.andWhere(`pokemon.${key} = :${key}`, { [key]: value });
      }
    });

    // Paginate results
    const [data, total] = await queryBuilder
      .take(pageSize)
      .skip((page - 1) * pageSize)
      .getManyAndCount();

    return { data, total };
  }
}

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
    filter: {
      name?: string;
      generation?: number;
      type1?: string;
      type2?: string;
      evolved?: boolean;
      familyId?: number;
      legendary?: boolean;
      // Add more filters as needed
    },
    page: number = 1,
    pageSize: number = 10,
  ): Promise<{ data: Pokemon[]; total: number }> {
    const queryBuilder = this.pokemonRepository.createQueryBuilder('pokemon');

    // Apply filters
    if (filter.name) {
      queryBuilder.andWhere('pokemon.name = :name', { name: filter.name });
    }

    if (filter.generation) {
      queryBuilder.andWhere('pokemon.generation = :generation', {
        generation: filter.generation,
      });
    }

    if (filter.type1) {
      queryBuilder.andWhere('pokemon.type1 = :type1', { type1: filter.type1 });
    }

    if (filter.type2) {
      queryBuilder.andWhere('pokemon.type2 = :type2', { type2: filter.type2 });
    }

    if (filter.evolved !== undefined) {
      queryBuilder.andWhere('pokemon.evolved = :evolved', {
        evolved: filter.evolved,
      });
    }

    if (filter.familyId) {
      queryBuilder.andWhere('pokemon.familyId = :familyId', {
        familyId: filter.familyId,
      });
    }

    if (filter.legendary !== undefined) {
      queryBuilder.andWhere('pokemon.legendary = :legendary', {
        legendary: filter.legendary,
      });
    }

    // Add more conditions for other filters

    // Paginate results
    const [data, total] = await queryBuilder
      .take(pageSize)
      .skip((page - 1) * pageSize)
      .getManyAndCount();

    return { data, total };
  }
}

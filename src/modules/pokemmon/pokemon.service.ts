import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pokemon } from 'src/database/entities/Pokemon';
import { Repository } from 'typeorm';

@Injectable()
export class PokemonService {



  constructor(@InjectRepository(Pokemon) private pokemonRepository: Repository<Pokemon>) {}

  async getAll() : Promise<Pokemon[]> {
    return await this.pokemonRepository.find();
  }

  async getById(id: number) : Promise<Pokemon> {
    return await this.pokemonRepository.findOne({
        where: {
            id
        }
    });
  }

  async create(pokemon: Pokemon) : Promise<Pokemon> {
    return await this.pokemonRepository.create(pokemon);
  }

  async update(pokemon: Pokemon): Promise<Pokemon> {
    return await this.pokemonRepository.save(pokemon);
  }

  async delete(id: number): Promise<any> {
    return await this.pokemonRepository.delete(id);
  }

}

import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { Pokemon } from 'src/database/entities/Pokemon';

@Controller()
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get()
  async getAll(): Promise<Pokemon[]> {
    return await this.pokemonService.getAll();
  }
  @Get()
  async getById(id: number): Promise<Pokemon> {
    return await this.pokemonService.getById(id);
  }

  @Post()
  async create(pokemon: Pokemon) : Promise<Pokemon> {
    return await this.pokemonService.create(pokemon);
  }

  @Put()
  async update(pokemon: Pokemon): Promise<Pokemon> {
    return await this.pokemonService.update(pokemon);
  }

  @Delete()
  async delete(id: number): Promise<any> {
    return await this.pokemonService.delete(id);
  }

}

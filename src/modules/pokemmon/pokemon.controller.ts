import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { Pokemon } from 'src/database/entities/Pokemon';

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) { }

  @Get('getAll')
  async getAll(): Promise<Pokemon[]> {
    return await this.pokemonService.getAll();
  }

  // @Get('getById/:id')
  // async getById(@Param('id') id: number): Promise<Pokemon> {
  //   return await this.pokemonService.getById(id);
  // }

  @Get('find')
  async find(
    @Body('filter') filter: Record<string, any>,
    @Param('page') page: number = 1,
    @Param('pageSize') pageSize: number = 10
  ): Promise<{
    data: Pokemon[];
    total: number;
  }> {
    return await this.pokemonService.find(filter, page, pageSize);
  }

  @Post('create')
  async create(@Body() pokemon: Pokemon): Promise<Pokemon> {
    return await this.pokemonService.create(pokemon);
  }

  @Put('update')
  async update(@Body() pokemon: Pokemon): Promise<Pokemon> {
    return await this.pokemonService.update(pokemon);
  }

  @Delete('delete/:id')
  async delete(@Param('id') id: number): Promise<any> {
    return await this.pokemonService.delete(id);
  }

}

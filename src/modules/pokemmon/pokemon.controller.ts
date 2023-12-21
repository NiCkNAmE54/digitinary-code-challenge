import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { Pokemon } from 'src/database/entities/Pokemon';
import { ApiQuery } from '@nestjs/swagger';

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
  @ApiQuery({ name: 'name', required: false })
  @ApiQuery({ name: 'generation', required: false })
  @ApiQuery({ name: 'type1', required: false })
  @ApiQuery({ name: 'type2', required: false })
  @ApiQuery({ name: 'evolved', required: false })
  @ApiQuery({ name: 'familyId', required: false })
  @ApiQuery({ name: 'legendary', required: false })
  @ApiQuery({ name: 'page', required: false })
  @ApiQuery({ name: 'pageSize', required: false })
  async find(
    @Query('name') name?: string,
    @Query('generation') generation?: number,
    @Query('type1') type1?: string,
    @Query('type2') type2?: string,
    @Query('evolved') evolved?: boolean,
    @Query('familyId') familyId?: number,
    @Query('legendary') legendary?: boolean,
    @Query('page') page: number = 1,
    @Query('pageSize') pageSize: number = 10
  ): Promise<{
    data: Pokemon[];
    total: number;
  }> {
    return await this.pokemonService.find({
      name,
      generation,
      type1,
      type2,
      evolved,
      familyId,
      legendary
    }, page, pageSize);
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

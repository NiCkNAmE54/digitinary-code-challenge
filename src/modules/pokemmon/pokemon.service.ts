import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pokemon } from 'src/database/entities/Pokemon';
import { BaseService } from 'src/shared/core/BaseService';
import { Repository } from 'typeorm';

@Injectable()
export class PokemonService extends BaseService<Pokemon> {

  constructor(@InjectRepository(Pokemon) private pokemonRepository: Repository<Pokemon>) {
    super();
    this.repository = pokemonRepository;
  }
}

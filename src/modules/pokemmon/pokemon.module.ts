import { TypeOrmModule } from "@nestjs/typeorm";
import { PokemonService } from "./pokemon.service";
import { PokemonController } from "./pokemon.controller";
import { Module } from "@nestjs/common";
import { Pokemon } from "src/database/entities/Pokemon";

@Module({
  imports: [
    TypeOrmModule.forFeature([
        Pokemon
    ])
  ],
  controllers: [PokemonController],
  providers: [PokemonService],
})
export class AppModule {}

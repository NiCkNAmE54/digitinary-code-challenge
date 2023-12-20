import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { Pokemon } from './database/entities/Pokemon';
import { Weather } from './database/entities/Waether';
import { Type } from './database/entities/Type';
import { Family } from './database/entities/Family';
import { PokemonModule } from './modules/pokemmon/pokemon.module';
import { FamilyModule } from './modules/family/family.module';
import { TypeModule } from './modules/type/type.module';
import { WeatherModule } from './modules/weather/weather.module';

@Module({
  imports: [
    DatabaseModule.forRoot({
      entities: [Pokemon, Weather, Type, Family]
    }),
    PokemonModule,
    WeatherModule,
    FamilyModule,
    TypeModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

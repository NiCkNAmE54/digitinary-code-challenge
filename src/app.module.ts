import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { Pokemon } from './database/entities/Pokemon';
import { Weather } from './database/entities/Waether';
import { Type } from './database/entities/Type';
import { PokemonModule } from './modules/pokemmon/pokemon.module';
import { TypeModule } from './modules/type/type.module';
import { WeatherModule } from './modules/weather/weather.module';

@Module({
  imports: [
    DatabaseModule.forRoot({
      entities: [Pokemon, Weather, Type]
    }),
    PokemonModule,
    WeatherModule,
    TypeModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

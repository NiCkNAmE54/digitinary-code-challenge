import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from './database/database.module';
import { Pokemon } from './database/entities/Pokemon';
import { Weather } from './database/entities/Waether';
import { Type } from './database/entities/Type';
import { Family } from './database/entities/Family';

@Module({
  imports: [
    DatabaseModule.forRoot({
      entities: [Pokemon, Weather, Type, Family]
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

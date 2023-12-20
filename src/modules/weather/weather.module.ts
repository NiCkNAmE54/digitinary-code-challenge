import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { WeatherService } from "./weather.service";
import { WeatherController } from "./weather.controller";
import { Weather } from "src/database/entities/Waether";

@Module({
  imports: [
    TypeOrmModule.forFeature([
        Weather
    ])
  ],
  controllers: [WeatherController],
  providers: [WeatherService],
})
export class WeatherModule {}

import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Pokemon } from './Pokemon';
import { IWeather } from './interfaces/IWeather';

@Entity()
export class Weather implements IWeather {
@PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;


  @OneToMany(() => Pokemon, (pokemon) => pokemon.weather1)
  pokemon1: Pokemon;

  @OneToMany(() => Pokemon, (pokemon) => pokemon.weather2)
  pokemon2: Pokemon;
}
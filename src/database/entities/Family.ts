import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Pokemon } from './Pokemon';
import { IFamily } from "./interfaces/IFamily";

@Entity()
export class Family implements IFamily {
@PrimaryGeneratedColumn()
  id: number;


  @OneToMany(() => Pokemon, (pokemon) => pokemon.familyId)
  pokemon: Pokemon;

}
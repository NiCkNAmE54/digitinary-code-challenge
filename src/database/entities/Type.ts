import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Pokemon } from './Pokemon';
import { IType } from './interfaces/IType';

@Entity()
export class Type implements IType {
@PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;


  @OneToMany(() => Pokemon, (pokemon) => pokemon.type1)
  pokemon1: Pokemon;

  @OneToMany(() => Pokemon, (pokemon) => pokemon.type2)
  pokemon2: Pokemon;
}
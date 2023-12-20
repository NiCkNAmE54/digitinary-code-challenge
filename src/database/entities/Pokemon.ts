import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Weather } from './Waether';
import { Type } from './Type';



@Entity()
export class Pokemon {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  pokedexNumber: number;

  @Column()
  imgName: string;

  @Column()
  generation: number;

  @Column()
  evolutionStage: number;

  @Column()
  evolved: boolean;

  @Column()
  familyId: number;

  @Column()
  crossGen: boolean;

  @ManyToOne(() => Type, (type) => type.pokemon1)
  type1: Type;

  @ManyToOne(() => Type, (type) => type.pokemon2)
  type2: Type;

  @ManyToOne(() => Weather, (weather) => weather.pokemon1)
  weather1: Weather;

  @ManyToOne(() => Weather, (weather) => weather.pokemon2)
  weather2: Weather;

  @Column()
  statTotal: number;

  @Column()
  attack: number;

  @Column()
  defense: number;

  @Column()
  stamina: number;

  //Boolean attributes start
  //TODO: consider converting to a seperate table 
  @Column()
  legendary: boolean;

  @Column()
  acquireable: boolean;

  @Column()
  spawns: boolean;

  @Column()
  regional: boolean;

  @Column()
  raidable: boolean;

  @Column()
  hatchable: boolean;

  @Column()
  shiny: boolean;

  @Column()
  nest: boolean;

  @Column()
  isNew: boolean;

  @Column()
  notGettable: boolean;

  @Column()
  futureEvolve: boolean;
 // Boolean attributes end


  @Column()
  cpAt40: number;

  @Column()
  cpAt39: number;
  
}
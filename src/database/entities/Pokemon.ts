import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Weather } from './Waether';
import { IWeather } from './interfaces/IWeather';
import { Type } from './Type';
import { IType } from './interfaces/IType';
import { IFamily } from './interfaces/IFamily';
import { Family } from './Family';



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

  @ManyToOne(() => Family, (family) => family.pokemon)
  familyId: IFamily;

  @Column()
  crossGen: boolean;

  @ManyToOne(() => Type, (type) => type.pokemon1)
  type1: IType;

  @Column({ nullable: true })
  @ManyToOne(() => Type, (type) => type.pokemon2)
  type2: IType;

  @ManyToOne(() => Weather, (weather) => weather.pokemon1)
  weather1: IWeather;

  @Column({ nullable: true })
  @ManyToOne(() => Weather, (weather) => weather.pokemon2)
  weather2: IWeather;

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
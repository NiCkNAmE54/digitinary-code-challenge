import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/shared/core/BaseService';
import { Repository } from 'typeorm';
import { Weather } from './../../database/entities/Waether';


/* 
* This class inherits the BaseService class that provides common CRUD operations
*/
@Injectable()
export class WeatherService extends BaseService<Weather>{

  constructor(@InjectRepository(Weather) private weatherRepository: Repository<Weather>) {
    super();
    // initiat the repository of the BaseService parent class
    this.repository = weatherRepository;
  }


}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/shared/core/BaseService';
import { Repository } from 'typeorm';
import { Weather } from './../../database/entities/Waether';

@Injectable()
export class WeatherService extends BaseService<Weather>{

  constructor(@InjectRepository(Weather) private weatherRepository: Repository<Weather>) {
    super();
    this.repository = weatherRepository;
  }


}

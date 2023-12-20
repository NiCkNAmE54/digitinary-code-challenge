import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Family } from 'src/database/entities/Family';
import { BaseService } from 'src/shared/core/BaseService';
import { Repository } from 'typeorm';

@Injectable()
export class FamilyService extends BaseService<Family>{

  constructor(@InjectRepository(Family) private familyRepository: Repository<Family>) {
    super();
    this.repository = familyRepository;
  }


}

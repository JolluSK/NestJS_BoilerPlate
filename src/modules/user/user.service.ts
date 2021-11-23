import { Injectable } from '@nestjs/common';
import type { FindConditions } from 'typeorm';

import { ValidatorService } from '../../shared/services/validator.service';
import type { Optional } from '../../types';
import type { UserEntity } from './user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(
    public readonly userRepository: UserRepository,
    public readonly validatorService: ValidatorService,
  ) { }

  /**
   * Find users
   */
  // async find(findData: FindConditions<UserEntity>): Promise<Optional<UserEntity[]>> {
  async getAll(): Promise<Optional<UserEntity[]>> {
    return await this.userRepository.find();
  }
}

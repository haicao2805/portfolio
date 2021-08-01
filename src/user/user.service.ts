import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { UserRepository } from './entities/user.repository';

@Injectable()
export class UserService {
      constructor(private readonly userRepository: UserRepository) {}

      async saveUser(user: User): Promise<User> {
            return await this.userRepository.save(user);
      }

      async findUserByField(field: keyof User, value: any): Promise<User> {
            return await this.userRepository.createQueryBuilder().where(`${field} = :value`, { value }).getOne();
      }
}

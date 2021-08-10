import { Injectable } from '@nestjs/common';

// --- Entity --- //
import { User } from './entities/user.entity';

// --- Repository --- //
import { UserRepository } from './entities/user.repository';

@Injectable()
export class UserService {
      constructor(private readonly userRepository: UserRepository) {}

      async saveUser(user: User): Promise<User> {
            return await this.userRepository.save(user);
      }

      async findUserByField(field: keyof User, value: any): Promise<User> {
            return await this.userRepository.findOne({ [`${field}`]: value });
      }
}

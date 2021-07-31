import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { UserRepository } from './entities/user.repository';

@Injectable()
export class UserService {
      constructor(private readonly userRepository: UserRepository) {}

      async saveUser(user: User): Promise<User> {
            return await this.userRepository.save(user);
      }

      async findUserByGoogleId(googleId: string): Promise<User> {
            const user = await this.userRepository.findOne({ googleId: googleId });
            return user;
      }
}

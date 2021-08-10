import { EntityRepository, Repository } from 'typeorm';
// --- Entity --- //
import { User } from './user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {}

import { EntityRepository, MongoRepository, Repository } from 'typeorm';
import { Blog } from './blog.entity';

@EntityRepository(Blog)
export class BlogRepository extends MongoRepository<Blog> {}

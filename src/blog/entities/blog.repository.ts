import { EntityRepository, MongoRepository } from 'typeorm';

// --- Entity --- //
import { Blog } from './blog.entity';

@EntityRepository(Blog)
export class BlogRepository extends MongoRepository<Blog> {}

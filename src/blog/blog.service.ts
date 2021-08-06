import { Injectable } from '@nestjs/common';
import { AddBlogDTO } from './dto/addBlogDTO.dto';
import { Blog } from './entities/blog.entity';
import { BlogRepository } from './entities/blog.repository';

@Injectable()
export class BlogService {
      constructor(private readonly blogRepository: BlogRepository) {}
      async saveBlog(blog: AddBlogDTO): Promise<Blog> {
            return await this.blogRepository.save(blog);
      }

      async deleteBlog(blogId: string) {
            return await this.blogRepository.delete(blogId);
      }

      async findBlogByField(field: keyof Blog, value: any): Promise<Blog> {
            return await this.blogRepository.createQueryBuilder().where(`${field} = :value`, { value }).getOne();
      }

      async findBlogsByField(field: keyof Blog, value: any): Promise<Blog[]> {
            return await this.blogRepository.createQueryBuilder().where(`${field} = :value`, { value }).orderBy('date', 'DESC').getMany();
      }

      async getAllBlog() {
            return await this.blogRepository.createQueryBuilder().orderBy('date', 'DESC').getMany();
      }
}

import { Injectable } from '@nestjs/common';
import { ObjectId } from 'mongodb';

// --- DTO --- //
import { AddBlogDTO } from './dto/addBlogDTO.dto';

// --- Entity --- //
import { Blog } from './entities/blog.entity';

// --- Repository --- //
import { BlogRepository } from './entities/blog.repository';

@Injectable()
export class BlogService {
      constructor(private readonly blogRepository: BlogRepository) {}
      async saveBlog(blog: AddBlogDTO): Promise<Blog> {
            return await this.blogRepository.save(blog);
      }

      async deleteBlog(blogId: string) {
            return await this.blogRepository.findOneAndDelete({ blogId: new ObjectId(blogId) });
      }

      async findBlogByField(field: keyof Blog, value: any): Promise<Blog> {
            return await this.blogRepository.findOne({ [`${field}`]: value });
      }

      async findBlogsByField(field: keyof Blog, value: any): Promise<Blog[]> {
            return await this.blogRepository.find({ [`${field}`]: value });
      }

      async getAllBlog() {
            return await this.blogRepository.find();
      }
}

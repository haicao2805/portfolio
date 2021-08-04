import { forwardRef, Module } from '@nestjs/common';
import { BlogService } from './blog.service';
import { BlogController } from './blog.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogRepository } from './entities/blog.repository';
import { AuthModule } from '../auth/auth.module';

@Module({
      imports: [TypeOrmModule.forFeature([BlogRepository]), AuthModule],
      controllers: [BlogController],
      providers: [BlogService],
})
export class BlogModule {}

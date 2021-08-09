import { Module } from '@nestjs/common';

// --- Service --- //
import { BlogService } from './blog.service';

// --- Controller --- //
import { BlogController } from './blog.controller';

// --- Repository --- //
import { BlogRepository } from './entities/blog.repository';

// --- Module --- //
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';

@Module({
      imports: [TypeOrmModule.forFeature([BlogRepository]), AuthModule],
      controllers: [BlogController],
      providers: [BlogService],
})
export class BlogModule {}

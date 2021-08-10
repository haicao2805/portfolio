import { Body, Controller, Delete, Get, Post, Req, Res, UseGuards, UsePipes } from '@nestjs/common';
import { Request, Response } from 'express';
import { ObjectId } from 'mongodb';

// --- Interface, type --- ///
import { apiResponse } from '../app/interface/apiResponse';

// --- Pipe --- //
import { JoiValidatorPipe } from '../util/validator/validator.pipe';

// -- Guard -- //
import { UserGuard } from '../auth/auth.guard';

// --- Service --- ///
import { BlogService } from './blog.service';

// --- DTO --- //
import { AddBlogDTO, vAddBlogDTOValidator } from './dto/addBlogDTO.dto';
import { DeleteBlogDTO, vDeleteBlogDTOValidator } from './dto/deleteBlogDTO.dto';
import { GetBlogByCategoryDTO, vGetBlogByCategoryDTOValidator } from './dto/getBlogByCategoryDTO.dto';

// --- Entity --- //
import { Blog } from './entities/blog.entity';

@Controller('blog')
export class BlogController {
      constructor(private readonly blogService: BlogService) {}

      @Post('/add')
      @UseGuards(UserGuard)
      @UsePipes(new JoiValidatorPipe(vAddBlogDTOValidator))
      async cAdd(@Req() req: Request, @Body() body: AddBlogDTO) {
            const blog = await this.blogService.saveBlog(body);
            return apiResponse.send({
                  data: blog,
                  details: { message: { type: 'message.add-success' } },
            });
      }

      @Delete('/delete')
      @UseGuards(UserGuard)
      @UsePipes(new JoiValidatorPipe(vDeleteBlogDTOValidator))
      async cDelete(@Req() req: Request, @Body() body: DeleteBlogDTO) {
            const blog = await this.blogService.findBlogByField('_id', new ObjectId(body.blogId));
            if (!blog) {
                  throw apiResponse.sendError({ details: { errorMessage: { type: 'error.not-found' } } }, 'BadRequestException');
            }

            await this.blogService.deleteBlog(body.blogId);
            return apiResponse.send({
                  data: blog,
                  details: { message: { type: 'message.delete-success' } },
            });
      }

      @Get('/getByCategory')
      @UsePipes(new JoiValidatorPipe(vGetBlogByCategoryDTOValidator))
      async cGetByCategory(@Req() req: Request, @Body() body: GetBlogByCategoryDTO) {
            const blogs: Blog[] = await this.blogService.findBlogsByField('category', body.category);

            return apiResponse.send({
                  data: blogs,
                  details: { message: { type: 'message.get-success' } },
            });
      }

      @Get('/getAll')
      async cGetAll(@Req() req: Request) {
            const blogs: Blog[] = await this.blogService.getAllBlog();

            return apiResponse.send({
                  data: blogs,
                  details: { message: { type: 'message.get-success' } },
            });
      }
}

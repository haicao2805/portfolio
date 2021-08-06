import { Body, Controller, Delete, Get, Post, Put, Req, Res, UseGuards, UsePipes } from '@nestjs/common';
import { Request, Response } from 'express';
import { JoiValidatorPipe } from 'src/util/validator/validator.pipe';
import { UserGuard } from '../auth/auth.guard';
import { BlogService } from './blog.service';
import { AddBlogDTO, vAddBlogDTOValidator } from './dto/addBlogDTO.dto';
import { DeleteBlogDTO, vDeleteBlogDTOValidator } from './dto/deleteBlogDTO.dto';
import { GetBlogByCategoryDTO, vGetBlogByCategoryDTOValidator } from './dto/getBlogByCategoryDTO.dto';
import { Blog } from './entities/blog.entity';

@Controller('blog')
export class BlogController {
      constructor(private readonly blogService: BlogService) {}

      @Post('/add')
      @UseGuards(UserGuard)
      @UsePipes(new JoiValidatorPipe(vAddBlogDTOValidator))
      async cAdd(@Req() req: Request, @Res() res: Response, @Body() body: AddBlogDTO) {
            const blog = await this.blogService.saveBlog(body);
            return res.send({ message: 'Add blog success', data: blog });
      }

      @Delete('/delete')
      @UseGuards(UserGuard)
      @UsePipes(new JoiValidatorPipe(vDeleteBlogDTOValidator))
      async cDelete(@Req() req: Request, @Res() res: Response, @Body() body: DeleteBlogDTO) {
            const blog = await this.blogService.findBlogByField('id', body.blogId);
            if (!blog) {
                  return res.send({ message: 'Blog is not found' });
            }

            await this.blogService.deleteBlog(body.blogId);
            return res.send({ message: 'Delete success', data: blog });
      }

      @Get('/getByCategory')
      @UsePipes(new JoiValidatorPipe(vGetBlogByCategoryDTOValidator))
      async cGetByCategory(@Req() req: Request, @Res() res: Response, @Body() body: GetBlogByCategoryDTO) {
            const blogs: Blog[] = await this.blogService.findBlogsByField('category', body.category);

            return res.send(blogs);
      }

      @Get('/getAll')
      async cGetAll(@Req() req: Request, @Res() res: Response) {
            const blogs: Blog[] = await this.blogService.getAllBlog();
            return res.send(blogs);
      }
}

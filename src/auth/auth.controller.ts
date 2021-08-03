import { Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { Request, Response } from 'express';
import { UserService } from '../user/user.service';
import { UserGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
      constructor(private readonly authService: AuthService, private readonly userService: UserService) {}
      @Get('/google')
      @UseGuards(AuthGuard('google'))
      async cGoogleAuth() {
            //
      }

      @Get('/google/callback')
      @UseGuards(AuthGuard('google'))
      async cGoogleAuthRedirect(@Req() req: Request, @Res() res: Response) {
            const token = await this.authService.createToken(req.user['googleId']);
            return res.cookie('token', token, { maxAge: 60 * 60 * 1000 }).redirect(process.env.SERVER_URL);
      }

      @Get('/test')
      @UseGuards(UserGuard)
      async cTest(@Req() req: Request, @Res() res: Response) {
            res.redirect(process.env.SERVER_URL);
      }
}

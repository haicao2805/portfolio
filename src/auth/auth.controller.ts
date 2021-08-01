import { Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { Request, Response } from 'express';
import { UserService } from '../user/user.service';
import { UserRepository } from '../user/entities/user.repository';
import { User } from '../user/entities/user.entity';
import { getManager } from 'typeorm';

@Controller('auth')
export class AuthController {
      constructor(
            private readonly authService: AuthService,
            private readonly userService: UserService,
            private readonly userRepository: UserRepository,
      ) {}
      @Get('/google')
      @UseGuards(AuthGuard('google'))
      async cGoogleAuth() {
            //
      }

      @Get('/google/callback')
      @UseGuards(AuthGuard('google'))
      async cGoogleAuthRedirect(@Req() req: Request, @Res() res: Response) {
            console.log(res.json);
            return res.redirect(process.env.SERVER_URL);
            // const reToken = await this.authService.createReToken(req.user);
            // return res.cookie('re-token', reToken, { maxAge: config.authController.googleUserCookieTime }).redirect(process.env.CLIENT_URL);
      }
}

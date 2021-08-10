import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';

// --- Guard --- //
import { AuthGuard } from '@nestjs/passport';

// --- Service --- //
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';

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
}

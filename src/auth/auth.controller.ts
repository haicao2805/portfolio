import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { Request, Response } from 'express';

@Controller('auth')
export class AuthController {
      constructor(private readonly authService: AuthService) {}
      @Get('/google')
      @UseGuards(AuthGuard('google'))
      cGoogleAuth() {
            //
      }

      @Get('/google/callback')
      @UseGuards(AuthGuard('google'))
      async cGoogleAuthRedirect(@Req() req: Request, @Res() res: Response) {
            console.log(res.json);
            return res.json;
            // const reToken = await this.authService.createReToken(req.user);
            // return res.cookie('re-token', reToken, { maxAge: config.authController.googleUserCookieTime }).redirect(process.env.CLIENT_URL);
      }
}

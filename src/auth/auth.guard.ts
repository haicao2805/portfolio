import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Request, Response } from 'express';

// --- Interface, type --- //
import { apiResponse } from '../app/interface/apiResponse';

// --- Service --- //
import { AuthService } from './auth.service';

@Injectable()
export class UserGuard implements CanActivate {
      constructor(private readonly authService: AuthService) {}

      async canActivate(context: ExecutionContext) {
            const req: Request = context.switchToHttp().getRequest();
            const res: Response = context.switchToHttp().getResponse();

            // get token
            const token = req.cookies['token'] || '';
            if (!token) {
                  res.cookie('token', '', { maxAge: 0 });
                  throw apiResponse.sendError({ details: { errorMessage: { type: 'error.not-allow' } } }, 'UnauthorizedException');
            }

            const user = await this.authService.getUserByToken(token);
            if (!user) {
                  res.cookie('token', '', { maxAge: 0 });
                  throw apiResponse.sendError({ details: { errorMessage: { type: 'error.not-allow' } } }, 'UnauthorizedException');
            }

            req.user = user;
            return true;
      }
}

import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthService } from './auth.service';

@Injectable()
export class UserGuard implements CanActivate {
      constructor(private readonly authService: AuthService) {}

      async canActivate(context: ExecutionContext) {
            const req: Request = context.switchToHttp().getRequest();
            const res: Response = context.switchToHttp().getResponse();

            // get token
            const token = req.cookies['token'] || '';
            console.log(token);
            if (!token) {
                  res.cookie('token', '', { maxAge: 0 });
                  throw new UnauthorizedException({ message: 'You are not allow this action' });
            }

            const user = await this.authService.getUserByToken(token);
            console.log(user);
            if (!user) {
                  res.cookie('token', '', { maxAge: 0 });
                  throw new UnauthorizedException({ message: 'You are not allow this action' });
            }

            req.user = user;
            return true;
      }
}

import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy, VerifyCallback } from 'passport-google-oauth20';
import { User } from '../../user/entities/user.entity';
import { UserService } from '../../user/user.service';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
      constructor(private readonly userService: UserService) {
            super({
                  clientID: process.env.GOOGLE_ID,
                  clientSecret: process.env.GOOGLE_SECRET,
                  callbackURL: `${process.env.SERVER_URL}/auth/google/callback`,
                  scope: ['email', 'profile'],
            });
      }

      async validate(accessToken: string, refreshToken: string, profile: Profile, done: VerifyCallback) {
            try {
                  let user = await this.userService.findUserByGoogleId(profile.id);
                  if (!user) {
                        user = new User();
                        user.googleId = profile.id;
                        user.username = profile.displayName;
                        user.email = profile.emails[0].value;
                        await this.userService.saveUser(user);
                  }
                  done(null, user);
            } catch (err) {
                  done(err, null);
            }
      }
}

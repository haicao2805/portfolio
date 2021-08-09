import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ObjectId } from 'mongodb';
import { User } from '../user/entities/user.entity';
import { UserService } from '../user/user.service';
import { Token } from './entities/token.entity';
import { TokenRepository } from './entities/token.repository';

@Injectable()
export class AuthService {
      constructor(
            private readonly tokenRepository: TokenRepository,
            private readonly userService: UserService,
            private readonly jwtService: JwtService,
      ) {}

      /**
       * take googId of user, then parse it into jwt string
       * @param googleId
       * @returns jwt string
       */
      async createToken(googleId: string) {
            // 1. Create and save token
            const token = new Token();
            token.data = googleId;

            await this.tokenRepository.delete({ data: googleId });
            const insertedToken = await this.tokenRepository.save(token);

            // 2. Encrypt token into jwt string
            const jwtString: string = this.encryptToken(insertedToken);
            return jwtString;
      }

      /**
       *
       * @param googleId clear token base on googleId
       */
      async clearToken(googleId: string) {
            await this.tokenRepository.delete({ data: googleId });
      }

      /**
       * parse token entity into jwt string
       * @param token
       * @returns jwt string or null
       */
      encryptToken(token: Record<any, any>) {
            try {
                  return this.jwtService.sign(JSON.stringify(token));
            } catch (err) {
                  console.log(err);
                  return null;
            }
      }

      /**
       * parse jwt string into T
       * @param jwtString
       * @returns type T
       */
      verifyToken<T>(jwtString: string) {
            try {
                  return this.jwtService.verify<any>(jwtString) as T;
            } catch (err) {
                  return null;
            }
      }

      async findTokenByField(field: keyof Token, value: any): Promise<Token> {
            return await this.tokenRepository.findOne({ [`${field}`]: value });
      }

      /**
       * Get user by the token of cookie
       * @param jwtString
       */
      async getUserByToken(jwtString: string): Promise<User> {
            let token: Token = this.verifyToken<Token>(jwtString);
            if (!token) return null;

            token = await this.findTokenByField('_id', new ObjectId(token._id));
            if (!token) return null;

            const user = await this.userService.findUserByField('googleId', token.data);
            if (!user) return null;

            return user;
      }
}

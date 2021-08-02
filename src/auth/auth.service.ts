import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
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

      async clearToken(googleId: string) {
            await this.tokenRepository.delete({ data: googleId });
      }

      encryptToken(data: Record<any, any>) {
            try {
                  return this.jwtService.sign(JSON.stringify(data));
            } catch (err) {
                  console.log(err);
                  return null;
            }
      }

      verifyToken<T>(jwtString: string) {
            try {
                  return this.jwtService.verify<any>(jwtString) as T;
            } catch (err) {
                  return null;
            }
      }

      async findTokenByField(field: keyof Token, value: any): Promise<Token> {
            return await this.tokenRepository.createQueryBuilder().where(`${field} = :value`, { value }).getOne();
      }
}

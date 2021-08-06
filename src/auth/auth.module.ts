import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { GoogleStrategy } from './password/google.strategy';
import { UserModule } from '../user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TokenRepository } from './entities/token.repository';
import { JwtService } from '@nestjs/jwt';

@Module({
      imports: [UserModule, TypeOrmModule.forFeature([TokenRepository])],
      controllers: [AuthController],
      providers: [
            AuthService,
            GoogleStrategy,
            {
                  provide: JwtService,
                  useFactory: () => {
                        return new JwtService({ secret: process.env.JWT_SECRET_KEY });
                  },
            },
      ],
      exports: [AuthService],
})
export class AuthModule {}

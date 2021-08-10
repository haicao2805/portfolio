import { Module } from '@nestjs/common';
import { GoogleStrategy } from './password/google.strategy';

// -- Module -- //
import { UserModule } from '../user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';

// --- Repository --- //
import { TokenRepository } from './entities/token.repository';

// --- Service --- //
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';

// --- Controller --- ///
import { AuthController } from './auth.controller';

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

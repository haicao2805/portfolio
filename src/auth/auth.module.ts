import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { GoogleStrategy } from './password/google.strategy';
import { UserModule } from '../user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from '../user/entities/user.repository';

@Module({
      imports: [UserModule, TypeOrmModule.forFeature([UserRepository])],
      controllers: [AuthController],
      providers: [AuthService, GoogleStrategy],
})
export class AuthModule {}

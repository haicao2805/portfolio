import { Module } from '@nestjs/common';

// --- Service --- //
import { UserService } from './user.service';

// --- Controller --- //
import { UserController } from './user.controller';

// --- Module --- //
import { TypeOrmModule } from '@nestjs/typeorm';

// --- Repository --- //
import { UserRepository } from './entities/user.repository';

@Module({
      imports: [TypeOrmModule.forFeature([UserRepository])],
      controllers: [UserController],
      providers: [UserService],
      exports: [UserService],
})
export class UserModule {}

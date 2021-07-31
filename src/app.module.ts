import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { User } from './user/entities/user.entity';
import { UserModule } from './user/user.module';

const Config = ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './config/.env',
});

const DBConfig = TypeOrmModule.forRoot({
      url: process.env.MONGODB_URL,
      type: 'mongodb',
      synchronize: true,
      keepConnectionAlive: true,
      useUnifiedTopology: true,
      entities: [User],
});

@Module({
      imports: [AuthModule, Config, DBConfig, UserModule],
      controllers: [AppController],
      providers: [AppService],
})
export class AppModule {}

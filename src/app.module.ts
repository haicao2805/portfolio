import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { Token } from './auth/entities/token.entity';
import { User } from './user/entities/user.entity';
import { UserModule } from './user/user.module';
import { BotModule } from './bot/bot.module';
import { BlogModule } from './blog/blog.module';
import { Blog } from './blog/entities/blog.entity';

const Config = ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './config/.env',
});

const DBConfig = TypeOrmModule.forRoot({
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      type: 'mysql',
      synchronize: true,
      keepConnectionAlive: true,
      entities: [User, Token, Blog],
});

@Module({
      imports: [AuthModule, Config, DBConfig, UserModule, BotModule, BlogModule],
      controllers: [AppController],
      providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';

// --- Serivce --- //
import { BotService } from './bot.service';

// --- Controller --- //
import { BotController } from './bot.controller';

@Module({
      controllers: [BotController],
      providers: [BotService],
})
export class BotModule {}

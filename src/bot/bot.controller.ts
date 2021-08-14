import { Body, Controller, Post, Req, Res, UsePipes } from '@nestjs/common';
import { Request, Response } from 'express';
import { apiResponse } from 'src/app/interface/apiResponse';

// --- Pipe --- //
import { JoiValidatorPipe } from '../util/validator/validator.pipe';

// --- Service --- //
import { BotService } from './bot.service';

// --- Entity --- //
import { UserResponse, vUserResponseValidator } from './entities/userResponse.entity';

@Controller('bot')
export class BotController {
      constructor(private readonly botService: BotService) {}

      @Post('/send')
      @UsePipes(new JoiValidatorPipe(vUserResponseValidator))
      async cSend(@Req() req: Request, @Body() body: UserResponse) {
            this.botService.sendUserResponse(body);

            return apiResponse.send({ details: { message: { type: 'message.send-message-success' } } });
      }
}

import { Body, Controller, Post, Req, Res, UsePipes } from '@nestjs/common';
import { Request, Response } from 'express';
import { BotService } from './bot.service';
import { UserResponse, vUserResponseValidator } from './entities/userResponse.entity';

@Controller('bot')
export class BotController {
      constructor(private readonly botService: BotService) {}

      @Post('/send')
      async cSend(@Req() req: Request, @Res() res: Response, @Body() body: UserResponse) {
            const { error } = vUserResponseValidator.validate(body);
            if (error) {
                  return res.send(error);
            }
            this.botService.sendUserResponse(body);

            return res.send('ok');
      }
}

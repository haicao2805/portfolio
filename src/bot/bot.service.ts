import { Injectable } from '@nestjs/common';
import axios from 'axios';

// --- Entity --- //
import { UserResponse } from './entities/userResponse.entity';

@Injectable()
export class BotService {
      async sendUserResponse(input: UserResponse) {
            let userReposneString =
                  `There is 1 message from your portfolio:\n` +
                  `Time     : ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Ho_Chi_Minh' })} \n` +
                  `Full name: ${input.fullName}\n` +
                  `Email    : ${input.email}\n` +
                  `Phone    : ${input.phone}\n` +
                  `Message  : ${input.message}`;

            await axios.post(
                  `https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage?chat_id=${process.env.CHAT_ID}&text=${userReposneString}`,
            );
      }
}

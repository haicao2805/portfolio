import { Controller } from '@nestjs/common';

// --- Service --- //
import { UserService } from './user.service';

@Controller('user')
export class UserController {
      constructor(private readonly userService: UserService) {}
}

import * as Joi from 'joi';
import { JoiPhoneFormat } from 'joi-phone-validation';

export class UserResponse {
      fullName: string;
      email: string;
      phone: string;
      content: string;
}

export const vUserResponseValidator = Joi.object({
      fullName: Joi.string().required(),
      email: Joi.string().min(5).max(255).email().required(),
      phone: JoiPhoneFormat.string().bothPhoneFormat('vi').required(),
      content: Joi.string().required(),
});

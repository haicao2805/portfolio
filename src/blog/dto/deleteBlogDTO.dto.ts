import * as Joi from 'joi';

export class DeleteBlogDTO {
      blogId: string;
}

export const vDeleteBlogDTOValidator = Joi.object({
      blogId: Joi.string().min(24).max(24).required(),
});

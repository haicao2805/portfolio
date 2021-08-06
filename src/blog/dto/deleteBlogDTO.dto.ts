import * as Joi from 'joi';

export class DeleteBlogDTO {
      blogId: string;
}

export const vDeleteBlogDTOValidator = Joi.object({
      blogId: Joi.string().required(),
});

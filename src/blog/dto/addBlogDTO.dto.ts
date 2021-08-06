import * as Joi from 'joi';

export class AddBlogDTO {
      title: string;

      opening: string;

      category: string;

      content: string;

      readTime: number;

      imageURL: string;
}

export const vAddBlogDTOValidator = Joi.object({
      title: Joi.string().required(),
      opening: Joi.string().required(),
      category: Joi.string().required(),
      content: Joi.string().required(),
      readTime: Joi.number().min(1).max(60).required(),
      imageURL: Joi.string().required(),
});

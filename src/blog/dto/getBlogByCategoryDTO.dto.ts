import * as Joi from 'joi';

export class GetBlogByCategoryDTO {
      category: string;
}

export const vGetBlogByCategoryDTOValidator = Joi.object({
      category: Joi.string().required(),
});

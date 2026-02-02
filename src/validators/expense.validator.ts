import Joi from 'joi';

export const expenseSchema = Joi.object({
  title: Joi.string().required(),
  amount: Joi.number().positive().required(), 
  category: Joi.string().required(),
  userId: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required().messages({
    'string.pattern.base': 'Invalid User ID format'
  }),
  date: Joi.date().optional()
});
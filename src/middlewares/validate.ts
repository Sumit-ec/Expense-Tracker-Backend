import { Request, Response, NextFunction } from 'express';
import { Schema } from 'joi';
import ErrorResponse from '../utils/errorResponse';

export const validate = (schema: Schema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body, { 
      abortEarly: false,
      errors: {
        wrap: {
          label: '' 
        }
      }
    });
    
    if (error) {
      const message = error.details.map((detail) => detail.message).join(', ');
      return next(new ErrorResponse(message, 400));
    }
    
    next();
  };
};
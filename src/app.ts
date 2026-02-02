import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';
import userRoutes from './routes/user.routes';
import expenseRoutes from './routes/expense.routes';
import ErrorResponse from './utils/errorResponse';

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use('/users', userRoutes);
app.use('/expenses', expenseRoutes);

app.use(
  (err: ErrorResponse, req: Request, res: Response, next: NextFunction) => {
    res.status(err.statusCode || 400).json({
      success: false,
      message: err.message || 'Server Error'
    });
  }
);

export default app;

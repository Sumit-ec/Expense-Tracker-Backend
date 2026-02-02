import { Request, Response, NextFunction } from 'express';
import User from '../models/User.model';
import Expense from '../models/Expense.model';
import ErrorResponse from '../utils/errorResponse';

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({ success: true, data: user });
  } catch (error) {
    next(error);
  }
};

export const getUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return next(new ErrorResponse('User not found', 404));
    res.json({ success: true, data: user });
  } catch (error) {
    next(error);
  }
};

export const getMonthlySummary = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return next(new ErrorResponse('User not found', 404));

    const now = new Date();
    const start = new Date(now.getFullYear(), now.getMonth(), 1);
    const end = new Date(now.getFullYear(), now.getMonth() + 1, 1);

    const summary = await Expense.aggregate([
      {
        $match: {
          user: user._id,
          date: { $gte: start, $lt: end }
        }
      },
      {
        $group: {
          _id: null,
          totalSpent: { $sum: '$amount' },
          count: { $sum: 1 }
        }
      }
    ]);

    const totalSpent = summary[0]?.totalSpent || 0;
    const count = summary[0]?.count || 0;

    res.json({
      success: true,
      data: {
        totalSpent,
        remainingBudget: user.monthlyBudget - totalSpent,
        expenseCount: count
      }
    });
  } catch (error) {
    next(error);
  }
};

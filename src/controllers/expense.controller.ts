import { Request, Response, NextFunction } from 'express';
import Expense from '../models/Expense.model';

export const addExpense = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const expense = await Expense.create({
      title: req.body.title,
      amount: req.body.amount,
      category: req.body.category,
      date: req.body.date,
      user: req.body.userId
    });

    res.status(201).json({ success: true, data: expense });
  } catch (error) {
    next(error);
  }
};

export const getUserExpenses = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { page = '1', limit = '10', category } = req.query;

    const filter: any = { user: req.params.id };
    if (category) filter.category = category;

    const expenses = await Expense.find(filter)
      .skip((Number(page) - 1) * Number(limit))
      .limit(Number(limit))
      .sort({ date: -1 });

    res.json({ success: true, data: expenses });
  } catch (error) {
    next(error);
  }
};

import { Router } from 'express';
import { addExpense } from '../controllers/expense.controller';
import { expenseSchema } from '../validators/expense.validator';
import { validate } from '../middlewares/validate';

const router = Router();
router.post('/', validate(expenseSchema), addExpense);

export default router;

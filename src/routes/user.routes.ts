import { Router } from 'express';
import {
  createUser,
  getUser,
  getMonthlySummary
} from '../controllers/user.controller';
import { getUserExpenses } from '../controllers/expense.controller';
import { validate } from '../middlewares/validate';
import { userSchema } from '../validators/user.validator';

const router = Router();

router.post('/', validate(userSchema), createUser);
router.get('/:id', getUser);
router.get('/:id/expenses', getUserExpenses);
router.get('/:id/summary', getMonthlySummary);

export default router;

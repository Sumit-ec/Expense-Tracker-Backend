import { Router } from 'express';
import {
  createUser,
  getUser,
  getMonthlySummary
} from '../controllers/user.controller';
import { getUserExpenses } from '../controllers/expense.controller';

const router = Router();

router.post('/', createUser);
router.get('/:id', getUser);
router.get('/:id/expenses', getUserExpenses);
router.get('/:id/summary', getMonthlySummary);

export default router;

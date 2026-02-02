import mongoose, { Document, Schema } from 'mongoose';
import User from './User.model';

export interface IExpense extends Document {
  title: string;
  amount: number;
  category: string;
  date: Date;
  user: mongoose.Types.ObjectId;
}

const ExpenseSchema: Schema<IExpense> = new Schema(
  {
    title: { type: String, required: true },
    amount: { type: Number, required: true, min: 1 },
    category: { type: String, required: true },
    date: { type: Date, default: Date.now },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }
  },
  { timestamps: true }
);

ExpenseSchema.pre<IExpense>('save', async function () {
  const userExists = await User.findById(this.user);
  if (!userExists) {
    throw new Error('User does not exist');
  }
});

export default mongoose.model<IExpense>('Expense', ExpenseSchema);

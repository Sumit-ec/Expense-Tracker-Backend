import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  monthlyBudget: number;
}

const UserSchema: Schema<IUser> = new Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    monthlyBudget: { type: Number, required: true, min: 1 }
  },
  { timestamps: true }
);

export default mongoose.model<IUser>('User', UserSchema);

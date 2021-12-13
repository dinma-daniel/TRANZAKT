import { model, Schema, Document } from 'mongoose';
import { User } from '@interfaces/users.interface';

const userSchema: Schema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    accounts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'account',
      },
    ],
    bills: [
      {
        type: Schema.Types.ObjectId,
        ref: 'bill',
      },
    ],
  },
  { timestamps: true },
);

const userModel = model<User & Document>('User', userSchema);

export default userModel;

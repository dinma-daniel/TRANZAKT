import { model, Schema, Document } from 'mongoose';
import { account } from '@interfaces/account.interface';

const accountSchema: Schema = new Schema(
  {
    accountNumber: {
      type: String,
      default: '',
      unique: true,
      required: true,
    },
    monoId: {
      type: String,
      default: '',
      unique: true,
      required: true,
    },
    bank: {
      type: String,
      default: '',
    },
    accountName: {
      type: String,
      default: '',
    },
    credit: {
      type: String,
      default: '',
    },
    debit: {
      type: String,
      default: '',
    },
    income: {
      type: String,
      default: '',
    },
    balance: {
      type: String,
      default: '',
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true },
);

const accountModel = model<account & Document>('account', accountSchema);

export default accountModel;

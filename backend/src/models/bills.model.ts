import { model, Schema, Document } from 'mongoose';
import { bill } from '@interfaces/bill.interface';
import { addMonths, addWeeks } from 'date-fns';

const billSchema: Schema = new Schema(
  {
    Name: {
      type: String,
      default: '',
      unique: true,
      required: true,
    },
    AccountNumber: {
      type: String,
      default: '',
      required: true,
    },
    Amount: {
      type: String,
      default: '',
      required: true,
    },
    StartDate: {
      type: String,
    },
    Trial: {
      type: Boolean,
      default: false,
    },
    TrialLength: {
      type: String,
      default: '0',
    },
    TrialContinue: {
      type: Boolean,
      default: false,
    },
    NextReminder: {
      type: String,
    },
    NextSubscription: {
      type: String,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true },
);

billSchema.pre('save', function (next) {
  const d = new Date((this as any).StartDate);
  let nextSub;
  if ((this as any).Trial == true) {
    const ll = (this as any).TrialLength;
    nextSub = addMonths(d, ll);
  } else {
    nextSub = addMonths(d, 1);
  }
  const nextRemind = addWeeks(d, 3);

  const nextSubString = nextSub.toISOString().substring(0, 10);
  const nextRemindString = nextRemind.toISOString().substring(0, 10);

  (this as any).NextReminder = nextRemindString;
  (this as any).NextSubscription = nextSubString;
  next();
});

const billModel = model<bill>('bill', billSchema);

export default billModel;

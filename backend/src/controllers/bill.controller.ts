import { NextFunction, Request, Response } from 'express';
import { HttpException } from '@exceptions/HttpException';
import BillService from '@services/bill.service';
import billModel from '@models/bills.model';

class BillController {
  public billService = new BillService();
  public create = async (req, res: Response, next: NextFunction) => {
    try {
      let okay = await this.billService.createBill(req.body, req.user._id);
      res.status(201).json({ message: 'bill created successfully' });
    } catch (error) {
      console.log('error', error);
      next(error);
    }
  };

  public get = async (req, res: Response, next: NextFunction) => {
    try {
      const bills = await billModel.find({ user: req.user._id }).select('Name Amount AccountNumber StartDate NextReminder NextSubscription Trial');

      res.status(201).json({ accounts: bills });
    } catch (error) {
      next(error);
    }
  };
}

export default BillController;

import { NextFunction, Request, Response } from 'express';
import { HttpException } from '@exceptions/HttpException';
import MonoService from '@services/mono.service';
import accountModel from '@models/accounts.model';

class MonoController {
  public monoService = new MonoService();
  public sync = async (req, res: Response, next: NextFunction) => {
    try {
      const Code = req.body.authCode;

      const okay = await this.monoService.createAccountInfo(Code, req.user._id);

      if (okay == undefined) {
        throw new HttpException(409, `sorry we had troubles linked  your account `);
      }

      res.status(201).json({ message: 'mono successful' });
    } catch (error) {
      next(error);
    }
  };

  public accounts = async (req, res: Response, next: NextFunction) => {
    try {
      const Code = await accountModel.find({ user: req.user._id }).select('bank accountNumber balance debit credit income');

      res.status(201).json({ accounts: Code });
    } catch (error) {
      next(error);
    }
  };
}

export default MonoController;

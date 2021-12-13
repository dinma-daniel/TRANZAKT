import { Router } from 'express';
import BillController from '@controllers/bill.controller';
import { Routes } from '@interfaces/routes.interface';
import authMiddleware from '@middlewares/auth.middleware';
import validationMiddleware from '@middlewares/validation.middleware';
import { BillDto } from '@dtos/users.dto';

class BillRoute implements Routes {
  public path = '/bill';
  public router = Router();
  public billController = new BillController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}`, validationMiddleware(BillDto, 'body'), authMiddleware, this.billController.create);
    this.router.get(`${this.path}`, authMiddleware, this.billController.get);
  }
}

export default BillRoute;

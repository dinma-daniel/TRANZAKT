import { Router } from 'express';
import MonoController from '@controllers/mono.controller';
import { Routes } from '@interfaces/routes.interface';
import authMiddleware from '@middlewares/auth.middleware';
import validationMiddleware from '@middlewares/validation.middleware';
import { MonoAuthCode } from '@dtos/users.dto';

class MonoRoute implements Routes {
  public path = '/mono';
  public router = Router();
  public monoController = new MonoController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}/auth`, validationMiddleware(MonoAuthCode, 'body'), authMiddleware, this.monoController.sync);
    this.router.get(`${this.path}/accounts`, authMiddleware, this.monoController.accounts);
  }
}

export default MonoRoute;

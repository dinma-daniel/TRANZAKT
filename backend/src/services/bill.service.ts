import { HttpException } from '@exceptions/HttpException';
import { User } from '@interfaces/users.interface';
import { account } from '@interfaces/account.interface';
import { bill } from '@interfaces/bill.interface';
import userModel from '@models/users.model';
import accountModel from '@models/accounts.model';
import billModel from '@models/bills.model';
import { isEmpty } from '@utils/util';
import { Mono } from 'mono-node';

class BillService {
  public users = userModel;
  public account = accountModel;
  public bill = billModel;

  public async createBill(body, userId): Promise<bill> {
    try {
      if (isEmpty(body)) throw new HttpException(400, 'NO body received');

      const createBill = await this.bill.create({ ...body, user: userId });

      return createBill;
    } catch (e) {
      console.log(e);
      throw new HttpException(400, 'billing name must be unique');
    }
  }
}

export default BillService;

import { HttpException } from '@exceptions/HttpException';
import { User } from '@interfaces/users.interface';
import { account } from '@interfaces/account.interface';
import userModel from '@models/users.model';
import accountModel from '@models/accounts.model';
import { isEmpty } from '@utils/util';
import { Mono } from 'mono-node';

class MonoService {
  public users = userModel;
  public account = accountModel;

  public async createAccountInfo(Code, userId): Promise<account> {
    try {
      if (isEmpty(Code)) throw new HttpException(400, 'NO auth code gotten');

      const monoClient = new Mono({
        secretKey: 'live_sk_IeuvM1JYJ1CpM9bOnavZ',
      });

      const monoAccountId = await monoClient.auth.getAccountId({ code: Code });
      const monoAccountInfo = await monoClient.account.getAccountInformation({ accountId: monoAccountId.data.id });

      const monocredit = await monoClient.account.getCustomerCredits({ accountId: monoAccountId.data.id });
      const monodebit = await monoClient.account.getCustomerDebits({ accountId: monoAccountId.data.id });
      const monoIncome = await monoClient.account.getIncome({ accountId: monoAccountId.data.id });

      const ActualData = monoAccountInfo.data;

      if (ActualData.meta.data_status != 'AVAILABLE') {
        throw new HttpException(409, `we could not retrieve your data`);
      }

      const accountNumber = ActualData.account.accountNumber;
      const accountName = ActualData.account.name;
      const monoId = ActualData.account._id;
      const bank = ActualData.account.institution.name;
      const balance = ActualData.account.balance;
      const credit = monocredit.data.total;
      const debit = monodebit.data.total;
      const income = monoIncome.data.amount;
      const createAccountData = await this.account.create({ accountNumber, credit, debit, income, accountName, monoId, bank, balance, user: userId });
      return createAccountData;
    } catch (e) {
      console.log(e);
    }
  }
}

export default MonoService;

import { BankAccount, BankConfig, Customer } from '../shared/index.js';
import { auditLog } from './auditlog.js';

export class Bank {
  public config: BankConfig;
  private accounts: BankAccount[] = [];

  constructor(bankConfig: BankConfig) {
    this.config = bankConfig;
  }

  public createAccount(customer: Customer) {
    const { bankCode, countryCode, name: bankName } = this.config;
    const account = new BankAccount(customer, bankCode, countryCode);
    auditLog(customer, 'assigned');
    this.accounts.push(account);
    console.log(`[${bankName}] welcomes ${account}!`);
  }

  public getAccounts() {
    return this.accounts;
  }
}

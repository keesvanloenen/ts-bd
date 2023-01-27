import { Iban } from './Iban.js';
import { Customer } from './Customer.js';
// import { auditLog } from '../server/auditlog.js';

export class BankAccount {
  iban: Iban;

  constructor(
    public customer: Customer,
    public bankCode: string,
    public countryCode: string,
  ) {
    this.iban = Iban.generate(this.bankCode, this.countryCode);
    // auditLog(this.iban, 'created');
  }

  toString() {
    return `[${this.iban.format()}] ${this.customer.format()}`;
  }
}

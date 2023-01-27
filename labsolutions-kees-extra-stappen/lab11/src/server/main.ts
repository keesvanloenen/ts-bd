import { Bank } from './Bank.js';
import { Customer } from '../shared/index.js';
import { BankServer } from './BankServer.js';

/* Tests --------------------------------------------------------------------------- */

console.log(
  new Customer('Pascalle', 'Vries', 'de').format() === 'Pascalle de Vries'
);
console.log(new Customer('Foo', 'Bar').format() === 'Foo Bar');

const bank = new Bank({
  bankCode: 'TYPE',
  countryCode: 'NL',
  name: 'Typed bank',
  port: 8080,
});
bank.createAccount(new Customer('Alfred', 'Kwak', 'Jodocus'));
bank.createAccount(new Customer('Brad', 'Pitt'));
bank.createAccount(new Customer('Jack', 'Sparrow'));

const bankServer = new BankServer(bank);
bankServer.listen();

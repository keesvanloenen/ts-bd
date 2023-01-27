import { Bank } from './Bank.js';
import { Customer } from '../shared/index.js';

/* Tests --------------------------------------------------------------------------- */

console.log(
  new Customer('Pascalle', 'Vries', 'de').format() === 'Pascalle de Vries'
);
console.log(new Customer('Foo', 'Bar').format() === 'Foo Bar');

const bank = new Bank({
  bankCode: 'TYPE',
  countryCode: 'NL',
  name: 'Typed bank',
});
bank.createAccount(new Customer('Alfred', 'Kwak', 'Jodocus'));
bank.createAccount(new Customer('Brad', 'Pitt'));
bank.createAccount(new Customer('Jack', 'Sparrow'));

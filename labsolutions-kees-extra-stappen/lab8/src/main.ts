interface BankConfig {
  name: string;
  countryCode: string;
  bankCode: string;
}

class Iban {
  constructor(
    public readonly countryCode: string,
    public readonly bankCode: string,
    public readonly accountNumber: string,
    public readonly controlNumber: string
  ) {}

  format() {
    const parts: string[] = [];
    for (let i = 0; i < this.accountNumber.length; i += 4) {
      parts.push(this.accountNumber.substring(i, i + 4));
    }
    const formattedAccountNumber = parts.join(' ');
    return `${this.countryCode}${this.controlNumber} ${this.bankCode} ${formattedAccountNumber}`;
  }

  static generate(
    bankCode: string = 'NL',
    countryCode: string = 'TYPE',
    accountNumber = Math.floor(Math.random() * 10_000_000_000).toString()
  ): Iban {
    return new Iban(countryCode, bankCode, accountNumber, controlNumber());

    function controlNumber() {
      const stringToConvert = `${bankCode}${accountNumber.padStart(
        10,
        '0'
      )}${countryCode}`;
      const capitalsReplaced = replaceCapitals(stringToConvert);
      const twoZerosAdded = `${capitalsReplaced}00`;
      const mod97 = Number(BigInt(twoZerosAdded) % 97n);
      return String(98 - mod97).padStart(2, '0');
    }

    function isCapital(char: string): boolean {
      const CHAR_CODE_A = 'A'.charCodeAt(0);
      const CHAR_CODE_Z = 'Z'.charCodeAt(0);

      const char_code = char.charCodeAt(0);
      return char_code >= CHAR_CODE_A && char_code <= CHAR_CODE_Z;
    }

    function replaceCapitals(value: string): string {
      const OFFSET_LATIN_CHAR = 55;

      return value
        .split('')
        .map((char: string) =>
          isCapital(char)
            ? String(char.charCodeAt(0) - OFFSET_LATIN_CHAR)
            : char
        )
        .join('');
    }
  }
}

class Customer {
  constructor(
    public firstName: string,
    public lastName: string,
    public insertion?: string
  ) {}

  format(): string {
    if (this.insertion) {
      return `${this.firstName} ${this.insertion} ${this.lastName}`;
    }
    return `${this.firstName} ${this.lastName}`;
  }
}

class BankAccount {
  iban: Iban;

  constructor(
    public customer: Customer,
    public bankCode: string,
    public countryCode: string
  ) {
    this.iban = Iban.generate(this.bankCode, this.countryCode);
    auditLog(this.iban, 'created');
  }

  toString() {
    return `[${this.iban.format()}] ${this.customer.format()}`;
  }
}

class Bank {
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
}

function auditLog<T extends { format(): string }>(
  subject: T,
  action: string
): void {
  console.log(`[${subject.format()}]: ${action}`);
}

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


// Fun exercise

// Solution 1: Using a FUNCTION TYPE EXPRESSION
//             (...args: TArgs) => TReturn 
//             This type is syntactically similar to an arrow function

function call1<TArgs extends any[], TReturn>(fn: (...args: TArgs) => TReturn, ...args: TArgs): TReturn {
  return fn(...args);
}

// Solution 2: Using a CALL SIGNATURE
//             { (...args: TArgs): TReturn }
//             This syntax is invented to support possible properties of functions as well!
function call2<TArgs extends any[], TReturn>(fn: { (...args: TArgs): TReturn }, ...args: TArgs): TReturn {
  return fn(...args);
}

function increment(n: number) {
  return ++n;
}

console.log(call1(increment, 41));    // => ERROR!
console.log(call2(increment, 41));    // => ERROR!
call1(console.log, 42);               // => ERROR!
call2(console.log, 42);               // => ERROR!

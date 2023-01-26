const DEFAULT_COUNTRY_CODE = 'NL';
const DEFAULT_BANK_CODE = 'TYPE';
const OFFSET_LATIN_CHAR = 55;
const CHAR_CODE_A = 'A'.charCodeAt(0);
const CHAR_CODE_Z = 'Z'.charCodeAt(0);

interface Iban {
  countryCode: string;
  bankCode: string;
  accountNumber: string;
  controlNumber: string;
}

interface Customer {
  firstName: string;
  lastName: string;
  insertion?: string;
}

interface BankAccount {
  customer: Customer;
  iban: Iban;
  toString(): string;
}

function createBankAccount(customer: Customer): BankAccount {
  return {
    customer,
    iban: generateIban(),
    toString() {
      return `[${formatIban(this.iban)}] ${formatName(this.customer)}`;
    },
  };
}

function formatName({ firstName, lastName, insertion }: Customer): string {
  if (insertion) {
    return `${firstName} ${insertion} ${lastName}`;
  }
  return `${firstName} ${lastName}`;
}

function isCapital(char: string): boolean {
  const char_code = char.charCodeAt(0);
  return char_code >= CHAR_CODE_A && char_code <= CHAR_CODE_Z;
}

function replaceCapitals(value: string): string {
  return value
    .split('')
    .map((char: string) =>
      isCapital(char) ? String(char.charCodeAt(0) - OFFSET_LATIN_CHAR) : char
    )
    .join('');
}

function generateIban(
  bankCode: string = DEFAULT_BANK_CODE,
  countryCode: string = DEFAULT_COUNTRY_CODE
): Iban {
  const sourceForAccountNumber = Math.floor(
    Math.random() * 10_000_000_000
  ).toString();
  const accountNumber = sourceForAccountNumber.padStart(10, '0');
  const stringToConvert = `${bankCode}${accountNumber}${countryCode}`;
  const capitalsReplaced = replaceCapitals(stringToConvert);
  const twoZerosAdded = `${capitalsReplaced}00`;
  const mod97 = Number(BigInt(twoZerosAdded) % 97n);
  const controlNumber = String(98 - mod97).padStart(2, '0');

  return { countryCode, bankCode, accountNumber, controlNumber };
}

function formatIban({
  countryCode,
  bankCode,
  accountNumber,
  controlNumber,
}: any) {
  const parts: string[] = [];
  for (let i = 0; i < accountNumber.length; i += 4) {
    parts.push(accountNumber.substring(i, i + 4));
  }
  const formattedAccountNumber = parts.join(' ');
  return `${countryCode}${controlNumber} ${bankCode} ${formattedAccountNumber}`;
}

const ibanTypedBank = generateIban();
const ibanIng = generateIban('INGB', 'NL');
const ibanDeutscheBank = generateIban('DEUT', 'DE');

/* Tests --------------------------------------------------------------------------- */

console.log(
  formatName({ firstName: 'Pascalle', lastName: 'Vries', insertion: 'de' }) ===
    'Pascalle de Vries'
);
console.log(formatName({ firstName: 'Foo', lastName: 'Bar' }) === 'Foo Bar');

const bankAccounts = [
  createBankAccount({
    firstName: 'Alfred',
    lastName: 'Kwak',
    insertion: 'Jodocus',
  }),
  createBankAccount({ firstName: 'Brad', lastName: 'Pitt' }),
  createBankAccount({ firstName: 'Jack', lastName: 'Sparrow' }),
];

bankAccounts.forEach((elem) => console.log(elem.toString()));

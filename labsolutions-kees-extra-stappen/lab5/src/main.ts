const DEFAULT_COUNTRY_CODE = 'NL';
const DEFAULT_BANK_CODE = 'TYPE';
const OFFSET_LATIN_CHAR = 55;
const CHAR_CODE_A = 'A'.charCodeAt(0);
const CHAR_CODE_Z = 'Z'.charCodeAt(0);

function formatName(firstName: string, lastName: string, insertion?: string): string {
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
) {
  const sourceForAccountNumber = Math.floor(Math.random() * 10_000_000_000).toString();
  const accountNumber = sourceForAccountNumber.padStart(10, '0');
  const stringToConvert = `${bankCode}${accountNumber}${countryCode}`;
  const capitalsReplaced = replaceCapitals(stringToConvert);
  const twoZerosAdded = `${capitalsReplaced}00`;
  const mod97 = Number(BigInt(twoZerosAdded) % 97n);
  const controlNumber = String(98 - mod97).padStart(2, '0');

  return {
    countryCode,
    bankCode,
    accountNumber,
    controlNumber,
  };
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

/* Tests */
console.log(formatName('Pascalle', 'Vries', 'de') === 'Pascalle de Vries');
console.log(formatName('Foo', 'Bar') === 'Foo Bar');

console.log(ibanTypedBank);
console.log(formatIban(ibanTypedBank));
console.log(ibanIng);
console.log(formatIban(ibanIng));
console.log(ibanDeutscheBank);
console.log(formatIban(ibanDeutscheBank));


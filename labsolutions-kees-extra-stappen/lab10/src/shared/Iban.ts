export class Iban {
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

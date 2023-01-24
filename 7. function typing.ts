// geen optionele argumenten
function printOrder(title: string, amount: number): void {
  console.log(`${title}: $${amount}`);
}

printOrder('Aangifte 200793', 100);

// ----------------------------------------------------------------------

// een optioneel argument
function printOrder2(title: string, amount?: number): void {
  console.log(`${title}: $${amount ?? 0}`);
}

printOrder2('Aangifte 200793', 100);
printOrder2('Aangifte 200794');

// ----------------------------------------------------------------------

// default argument
function printOrder3(title: string, amount = 0): void {
  console.log(`${title}: $${amount}`);
}

printOrder3('Aangifte 200793', 100);
printOrder3('Aangifte 200794');

// ----------------------------------------------------------------------

// rest argument

function printOrder4(title: string, ...amounts: bigint[]): void {
  const total = amounts.reduce((subtotal: bigint, amount: bigint) => subtotal + amount, 0n);
  console.log(`${title}: $${total}`); 
}

printOrder4('Aangifte 200793', 100n, 200n, 300n);
printOrder4('Aangifte 200794');

// ----------------------------------------------------------------------

// Opdrachtje:
function printOrder5(title: string, amount: number): void {
  console.log(`${title}: $${amount}`);  // 👈 laat dit staan
}

printOrder5('Aangifte 200793', 100);    // 👈 geef objectje mee

// We hebben al even interfaces gezien,  👇 maar dat is hier weer weggehaald
function printOrder6({ title, amount }: any): void {
  console.log(`${title}: $${amount}`);
}

const aangifteX = { title: 'Aangifte 200793', amount: 100 }
printOrder(aangifteX);


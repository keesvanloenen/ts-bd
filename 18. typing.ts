// typeof betekent in JavaScript check of iets van een type is:
// bijv. typeof 10 === 'number'     // true
//       typeof viool === 'object'  // true

// in TypeScript kunnen we typeof ook gebruiken om in een keer van een bestaand object een interface te bouwen

// a. OBJECTEN
let polisA = { a: 'Mo' };
let polisB = { a: 'Bert', b: 10 };

polisA = polisB;
polisB = polisA; // 💣

function doeIets(x: typeof polisA): string {
  return x.a;
}

console.log(doeIets(polisA));
console.log(doeIets(polisB));

// ----------------------------------------------------------------------

// b. FUNCTIE ARGUMENTEN

let funcA = (a: number) => 0;
let funcB = (b: number, s: string) => 0;

funcA = funcB; // 💣
funcB = funcA;

const karakters = ['a', 'b', 'c'];
karakters.forEach((elem, index, arr) => console.log(elem, index, arr));

// ----------------------------------------------------------------------

// c. FUNCTIE return value

let funcX = (a: number) => ({ a: 'Mo' });
let funcY = (a: number) => ({ a: 'Mo', b: ' Urk' });

funcX = funcY;
funcY = funcX; // 💣
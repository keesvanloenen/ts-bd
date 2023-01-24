// CMD+K CMD+I = type info (hoveren)
// CMD+SPATIE = activeer intellisense
// CMD+. = snelle fix (geel lampje)

let greet = 'Welcome';
const tax: number = 0.06;

function berekenPrijs(amount: number, taxRate: number = 0.12): number {
  return amount * (1 + taxRate);
}

console.log(berekenPrijs(10, 0.15));

// verwacht: nrOfUnpaidBills, retourneert boolean
// nrOfUnpaidBills < 4 retourneer dan true, anders false

function isTrustedCustomer(nrOfUnpaidBills: number): boolean {
  return (nrOfUnpaidBills < 4);
  
  // if (nrOfUnpaidBills < 4) {
  //   return true;
  // }
  // return false;
}

console.log(isTrustedCustomer(3));
console.log(isTrustedCustomer(10));
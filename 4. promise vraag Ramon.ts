// vraag Ramon: Hoe zit het nou met een async function die iets retourneert?

// ================================================================
// BEGINSITUATIE: getEmail() haalt een email adres op en toont het!
// ================================================================
(async function getEmail(): Promise<void> {
  const response = await fetch('https://randomuser.me/api/');
  const data = await response.json();
  const email: string = data.results[0].email;

  console.log(email);
})();

// ====================================================
// Hoe kunnen we de 'ophaal' en 'toon' code opsplitsen?
// ====================================================

// OPTIE 1: roep een (synchrone) functie aan met de 'uitgepakte' waarde

function doeIetsMetValue(value: string): void {
  console.log(value);
}

(async function getEmail(): Promise<void> {
  const response = await fetch('https://randomuser.me/api/');
  const data = await response.json();
  const email: string = data.results[0].email;

  doeIetsMetValue(email);
})();

// OPTIE 2: Laat een asynchrone functie de waarde retourneren
//          Let op deze waarde is altijd een promise!!

async function getEmail(): Promise<string> {
  const response = await fetch('https://randomuser.me/api/');
  const data = await response.json();
  const email: string = data.results[0].email;

  return email; // 👈 een string ingepakt in een promise
}

(async function main(): Promise<void> {
  console.log(await getEmail()); // 👈 moeten we hier weer awaiten !!!
})();

// nog een keer de array syntax
const arr: number[] = [255, 255, 0];
const arr2: Array<number> = [255, 255, 0];

// tuple (vast aantal elementen en elk element eigen type)
const rgb1: [number, number, number] = [255, 255, 0];

// dit is een object
const player1 = {
  name: 'Bo',
  nrOfLives: 3,
};

// dit is een tuple 
const player2: [string, number] = ['Bo', 3];

// Voordelen tuples:

// VOORDEEL 1: meer waardes retourneren uit een functie

function getRgb(
  red: number,
  green: number,
  blue: number
): [number, number, number] {
  return [red, green, blue];
}

console.log(getRgb(10, 20, 255));

// VOORDEEL 2: extra optie van tuples bij function arguments

function printMovie(title: string, releaseDate: Date, rating: number): void {
  console.log(title, releaseDate, rating);
}

printMovie('Broker', new Date(2022, 3, 1), 7.4);

function printMovie2(...args:[string, Date, number]): void {
  console.log(...args);
}

printMovie2('Broker', new Date(2022, 3, 1), 7.4);


// VOORDEEL 3: destructuren, vooral bij Promises:

// destructuren feitelijk hetzelfde als bij arrays
const movie1 = ['Tenet', new Date(2020, 1, 1), 8.1];
const [title, releaseDate, rating] = movie1;
console.log(typeof title, typeof releaseDate, typeof rating);

async function doeIets(): Promise<void> {
  const [title, releaseDate] = await Promise.all([
    Promise.resolve('Broker'),
    Promise.resolve(new Date(2022, 3, 1)),
  ]);
  console.log(title, releaseDate);
}

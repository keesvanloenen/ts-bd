// array intro & alle primitives

const names = ['Ad', 'Bo', 'Cas'];
// const names: Array<string> = ['Ad', 'Bo', 'Cas'];    // alternatieve syntax

// names.push(true);     // 💣

let quote = 'Hallo daar';
let nrOfEmployees = 12;
let pi = 3.14;
let nrOfStarsInOurMilkyWay = 123456789012n;
let isHouseOwner = true;
let x: null = null;
let y: undefined = undefined;
let size = Symbol('size');

function showInfo(...args: any[]): void {
  args.forEach((elem: any) => {
    console.log(elem, '*', typeof elem);
  });
}

showInfo(quote, nrOfEmployees, pi, nrOfStarsInOurMilkyWay, isHouseOwner);

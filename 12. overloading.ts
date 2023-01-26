function groet(naam: string): string;           // overloading signature
function groet(naamArray: string[]): string[]   // overloading signature
function groet(naamOfNaamArray: unknown): unknown {   // implementation signature
  if (typeof naamOfNaamArray === 'string')  {
    return `Hallo ${naamOfNaamArray}`;
  } else if (Array.isArray(naamOfNaamArray)) {
    return naamOfNaamArray.map((n: string) => `Hallo ${n}`).join(', ');
  }
}


console.log(groet('Bo'));
console.log(groet(['Cas', 'Do', 'Eric')]);
groet()


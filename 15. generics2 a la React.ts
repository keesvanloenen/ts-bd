// voorbeeldje ala React

interface Getter<T> {
  (): T
}

interface Setter<T> {
  (val: T): void
}


type State<T> = [ Getter<T>, Setter<T>];    // type alias bij union types, intersection types en ... tuples

//                   retourneer een tuple met getter 👇 en setter 👇
function simpleStringState<T>(
  initial: T
): State<T> {
  let val: T = initial; // closure
  return [
    () => val,
    (newVal: T) => {
      val = newVal;
    },
  ];
}

// ---------------------------------------------------------------------------------

// De consumer van al dit moois:

// 👇 destructuren met zelfgekozen namen
const [getName, setName] = simpleStringState('Joop');
const [getAge, setAge] = simpleStringState(20);

console.log(getName());
setName('Ans');
console.log(getName());

console.log(getAge());
setAge(10);
console.log(getAge());

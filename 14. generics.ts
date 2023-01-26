// function echo<T>(msg: T[]): T {
//   return msg[0];
// }

// let res = echo<string>(['a', 'b']);
// console.log(res);

// class Sequence<T>{
//   constructor(private seed: T, private step: (value: T) => T) {}

//   next(): T {
//     this.seed = this.step(this.seed);
//     return this.seed;
//   }
// }

// const seq1 = new Sequence<number>(0, (val: number) => val - 3);
// console.log(seq1.next());
// console.log(seq1.next());

// const seq2 = new Sequence<string>('', (val: string) => val + '.');
// console.log(seq2.next());
// console.log(seq2.next());

// ----------------------------------------------------------------------

interface Measurable {
  length: number;
}

class LongCache<T extends Measurable> {
  constructor(public current: T) {}

  update(value: T) {
    if (value.length > this.current.length) {
      this.current = value;
    }
  }
}

const longName = new LongCache(['a', 'b', 'c']);
longName.update(['a', 'b']);                  // => longName.current = 'Obiwan'
console.log(longName.current)
longName.update(['a', 'b', 'c', 'd']);        // => longName.current = 'LongerName'
console.log(longName.current)
longName.update(['a', 'b', 'c', 'd', 'e']);   // => longName.current = 'LongestName'
console.log(longName.current)
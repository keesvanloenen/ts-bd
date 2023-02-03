// let jd: unknown;
// console.log(jd);

// jd = 'Gegroet!';
// jd = 42;
// let dj: any;
// jd = dj;

// let poging1: number = jd;   // 💣

// let vrijdag: any = 42;
// console.log(vrijdag.toUpperCase());

// let vrijdagMiddag: unknown = [{ id: 10}, { id: 11}];
// console.log(vrijdagMiddag.toUpperCase());   // 💣 :)

// if (typeof vrijdagMiddag === 'string') {
//   console.log(vrijdagMiddag.toUpperCase());   // 💣 :)
// }


interface Help2 {
  vraag: string;
}

type mogelijkheden =  Help2 | number | 10;
console.log(null === null);       // true
console.log(true || false);       // true
console.log(2 === "2");           // false
console.log(false === true);      // false
console.log(null === undefined);  // false
console.log(2 + "2");             // 22
console.log(2 * "2");             // 4

var a: string; 
console.log(typeof a);            // undefined

var b: never; 
console.log(typeof b);            // undefined

var c: any = 'test'; 
console.log(typeof c);            // string

var d = true; 
console.log(d.charAt(1));         // error

var e: any = true; 
console.log(e.charAt(1));         // error

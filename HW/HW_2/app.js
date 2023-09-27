const helpers = require('../helpers');

helpers.printTask(1);
let a = 110;
let b = 20;
let c = 20;
let d = 122;
let f = "122"


let zz1 = a !== d;
let zz2 = b == d;
let zz3 = c <= b;
let zz4 = b >= d;
let zz5 = (d == c) && (b == d);
let zz6 = (c > b) || (d >= b);
let zz7 = (a > b) || (a > c);
let zz8 = (a == c) && (d == c);
let zz9 = !(c !== c) && (a >= a);
let zz0 = (c > c) || (a <= a);
let zz10 = (b > a) && (c == d);
let zz11 = (c > a) && (b > d);
let zz12 = (f == d) && (f === d);
let zz13 = (d !== f) && (d != f);
console.log("<<<<<<<<<<<<<<<<<<<<<<1>>>>>>>>>>>>>>>>>>>>>")
console.log("zz1 ", zz1, "\nzz2 ", zz2, "\nzz3 ", zz3, "\nzz4 ", zz4, "\nzz5 ", zz5, "\nzz6 ", zz6,
    "\nzz7 ", zz7, "\nzz8 ", zz8, "\nzz9 ", zz9, "\nzz10 ", zz10, "\nzz12 ", zz12, "\nzz13 ", zz13,);
console.log("<<<<<<<<<<<<<<<<<<<<<<2>>>>>>>>>>>>>>>>>>>>>")
console.log(
    `zz1 ${zz1}`,
    `zz2 ${zz2}`,
    `zz3 ${zz3}`,
    `zz4 ${zz4}`,
    `zz5 ${zz5}`,
    `zz6 ${zz6}`,
    `zz7 ${zz7}`,
    `zz8 ${zz8}`,
    `zz9 ${zz9}`,
    `zz0 ${zz0}`,
    `zz10 ${zz10}`,
    `zz11 ${zz11}`,
    `zz12 ${zz12}`,
    `zz13 ${zz13}`
);
console.log("<<<<<<<<<<<<<<<<<<<<<<3>>>>>>>>>>>>>>>>>>>>>")
const output = `
zz1 ${zz1}
zz2 ${zz2}
zz3 ${zz3}
zz4 ${zz4}
zz5 ${zz5}
zz6 ${zz6}
zz7 ${zz7}
zz8 ${zz8}
zz9 ${zz9}
zz0 ${zz0}
zz10 ${zz10}
zz11 ${zz11}
zz12 ${zz12}
zz13 ${zz13}
`;

console.log(output);



console.log("<<<<<<<<<<<<<<<<<<Task3>>>>>>>>>>>>>>>>>.")
let age = 10;
let ticketPrice = 1000;
if (age > 0 && age < 120) {
    if (age <= 2) {
        console.log("Ticket price ", ticketPrice * 0)
    } else if (age > 2 && age <= 12) {
        console.log("Ticket price ", ticketPrice * 0.5)
    } else if (age > 12 && age <= 65) {
        console.log("Ticket price ", ticketPrice * 1)
    } else if (age > 65) {
        console.log("Ticket price ", ticketPrice * 0.8)
    }
} else {
    console.log("Проверь возраст ")
}
const helpers = require('../helpers');

helpers.printTask(1);

let ar = ["Monday", "Tuesday", "Wensday", "Thursday", "Friday"];
console.log(ar);
console.log(ar.length);
ar.unshift("Sunday");
console.log(ar);
ar.push("Suturday");
console.log(ar)

helpers.printTask(2);
const myArray = [1, "Hello", true, null, { name: "John" }, [1, 2, 3]];
console.log(myArray);

myArray.length = 7;
console.log(myArray);

console.log("<<<<<<<<<4>>>>>>>>>")


myArray.length = 3;
console.log(myArray);

myArray.pop();
myArray.shift();

console.log(myArray);

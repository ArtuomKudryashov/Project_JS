const x1 = 56.789;
const x2 = "Hello, this is a string variable";
const x3 = true;

const x4 = ["red", "green", "blue", "blue", 56.0, true]

console.log(x4[1])//green
console.log(x4);

x4.push("yellow");
console.log(x4);
x4.push("Teal");
x4.push("cyan");
console.log(x4)
console.log(x4.push("Dark"))
console.log(x4)
x4[-20] = 78;
console.log(x4);
x4[-21] = 100;
console.log(x4);
x4[5] = 1000;
console.log(x4);
x4.pop();
console.log(x4);
console.log(x4.pop())
console.log(x4);
x4.unshift(1111);
console.log(x4.unshift(222222));
console.log(x4)
console.log(x4.shift())
console.log(x4)
x4.unshift(123456)
console.log(x4.unshift(77777))
console.log(x4.unshift(77777.88888))
console.log(x4)


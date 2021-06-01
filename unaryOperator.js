//The unary + operator can be used to convert a variable to a number:
const x="2";
const y=+x;
console.log(typeof x+" "+typeof y);//string number

//If the variable cannot be converted, it will still become a number, but with the value NaN (Not a Number):
const n="john";
const z= +n;
console.log(typeof n+" "+typeof z);//string number(NaN)

const newvalue=z/10;
console.log(newvalue);//NaN
var x=10/"Apple";
console.log(x);//NaN

var r=isNaN(x);//true
console.log(r);

var y=NaN;
var z=5;
console.log(y+z);//NaN

var r1="5";
console.log(y+r1);//NaN5

var myNumber = 2; 
var txt = "";
while (myNumber != Infinity) {
   myNumber = myNumber * myNumber;
   txt = txt + myNumber+"\n" ;
}
console.log(txt);//4 16 256 upto infinity
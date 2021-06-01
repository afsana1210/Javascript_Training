//The difference between slice and sunstr is that the substr second parameter specifies the length of the extracted part.

var str="Apple, Banana , Kiwi";
var s=str.substr(7,6);
console.log(s);

var s2=str.substr(7);
console.log(s2);

var s3=str.substr(-14,6);
console.log(s3);

var s4=str.substr(-4);
console.log(s4);
var str="Please locate where 'locate' occurs!";
var s=str.slice(7,13);//start from 7 and end at 13-1 i.e 12
console.log(s);//locate

var s1=str.slice(14,19);
console.log(s1);

var s2=str.slice(-15,-9);
console.log(s2);

//If you omit the second parameter, the method will slice out the rest of the string:
var s3=str.slice(7);
console.log(s3);

var s4=str.slice(-16);
console.log(s4);//'locate' occurs!"
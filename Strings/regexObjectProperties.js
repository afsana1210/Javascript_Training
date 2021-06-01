//The constructor property returns a regular expression's constructor function:
var ptt=new RegExp("Hello world","g");
var res=ptt.constructor;
console.log(res);

var r1=ptt.global;
console.log(r1);//true

var str="Hello world";
var p=/h/gi;
var r=p.ignoreCase;
console.log(r);//true

//return the text of the RegExp pattern.
var r2=p.source;
console.log(r2);//h

var r3=p.exec(str);
console.log(r3);

//return the string value of the regular expression.
var r4=p.toString();
console.log(r4);// o/p:/h/gi

var r5=ptt.toString();
console.log(r5);///Hello world/g


var str="Visit W3Schools";
var pattern=/W3Schools/;
console.log(str.match(pattern));

var p1=/W3Schools/i;
var result=str.match(p1);
console.log(result);

var  str="Is this all there is?";
var p2=/[h]/g;
var res=str.match(p2);
console.log(res);

var  str="Is this all there is?";
var p3=/[H]/gi;
var res1=str.match(p3);
console.log(res1);

var s1="Is this all there is 100 1 10 210 Where";
var p4=/[0-9]/g;
var r=s1.match(p4);
console.log(r);


var p5=/(is|all)/g;
var r1=s1.match(p5);
console.log(r1);

var p6=/\s+/g;
var space=s1.match(p6);
console.log(space);


var p9=/al*/g;
var quantifier=s1.match(p9);
console.log(quantifier);

var p10=/he*/g;
var quantifiers=s1.match(p10);
console.log(quantifiers);

var p11=/10?/g;
var quantifier1=s1.match(p11);
console.log(quantifier1);

var p12=/[^a-s]/gi;
var brackets=s1.match(p12);
console.log(brackets);



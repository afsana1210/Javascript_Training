//Do a global search for a substring that contains a sequence of four digits:
var str="100 1000 and 10000";
var p1=/\d{4}/g;
var r=str.match(p1);
console.log(r);//[ '1000', '1000' ]

var p2=/\d{3,4}/g;
var r1=str.match(p2);
console.log(r1);

//Do a global search for a substring that contains a sequence of at least three digits:
var p3=/\d{3,}/g;
var r2=str.match(p3);
console.log(r2);

//global search for "is" followed by " all".
var s1="This is all there is";
var p4=/is(?= all)/g;
var r3=s1.match(p4);
console.log(r3);

//Do a global, case insensitive search for "is" not followed by " all":
var p5=/is(?! all)/gi;
var r4=s1.match(p5);
console.log(r4);
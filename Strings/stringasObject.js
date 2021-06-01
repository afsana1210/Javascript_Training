var str="john";
var y=new String("john");
var x=new String("john");
var x="hello  world";
var s=x.split(" ");
var j=s.join("");
console.log(j);
console.log(s);


//console.log(typeof str);//string
//console.log(typeof y);//object

//onsole.log((str==y));//true
//
//string objects cannot be compare
console.log((y==x));//false



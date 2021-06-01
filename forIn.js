//The JavaScript for/in statement loops through the properties of an Object:
var person = {fname:"John", lname:"Doe", age:25};

var text=" ";
var x;
for(x in person){
    console.log(x);//fname,lname,age
    text+=person[x]+" ";
   
}
console.log(text);

var number=[2,45,6,7,88,200];
var n="";
for(var i in number){
    console.log(i);//0 1 2 3 4 5
    n+=number[i]+"\n";//2 45 6 7 88 200

}
console.log(n);
"use strict";
var x="hello";
//delete x;//SyntaxError: Delete of an unqualified identifier in strict mode.

function myfunction(){
    console.log("hello world");
}
//delete myfunction;//SyntaxError: Delete of an unqualified identifier in strict mode.

//dublicationg a parameter name is not allowed
// function dubParam(p1,p1){//SyntaxError: Duplicate parameter name not allowed in this context
//     console.log("dublicate parameter");
// }

//Octal numeric literals are not allowed.
//const oct_num=010;//yntaxError: Octal literals are not allowed in strict mode.

//const oct_escape_character="\010";//SyntaxError: Octal escape sequences are not allowed in strict mode.

var obj={};
Object.defineProperty(obj,"x",{value:0 ,writable:false});
obj.x=3.14;//TypeError: Cannot assign to read only property 'x' of object '#<Object>'
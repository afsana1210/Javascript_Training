x="Hello";
console.log(x);//hello
localstricMode();
function localstricMode(){
    "use strict";
    y="hello";
    console.log(y);//y is undefined
}
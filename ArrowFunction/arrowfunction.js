//regular function
const hello=function(){
    return "Hello world";
}
const hello=()=>{
    return "Hello world";
}
const hello=()=>"hello world";

const hello=(val)=>"hello"+val;

//In fact, if you have only one parameter, you can skip the parentheses as well:
const hello=val=>"hello"+val;


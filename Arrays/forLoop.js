var array=["abc","pqr",1,2,3];
var len=array.length;


for(let i=0; i<len; i++){
   var element=array[i];
   console.log(element);
}
array.forEach(myfunction);
function myfunction(value){
    var element=value;
    console.log(element);
}

console.log(typeof array);//object

console.log(Array.isArray(array));//true

console.log(array instanceof Array);//true
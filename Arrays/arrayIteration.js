var arr=[1,2,100,2,3,18,9];
arr.forEach(myfunction);

function myfunction(value){
    var element=value;
    console.log(element);
}

var newarray=arr.map(newArray);
function newArray(value){
  return value *2;
}
console.log(newarray);

/*The map() method creates a new array by performing a function on each array element.

The map() method does not execute the function for array elements without values.

The map() method does not change the original array.*/

// The filter() method creates a new array with array elements that passes a test.
var number=arr.filter(passTest);
function passTest(value){
    return value >18;
}
console.log(number);

//The reduce() method runs a function on each array element to produce (reduce it to) a single value.
var single_value=arr.reduce(reduceArray);

//The total (the initial value / previously returned value)
function reduceArray(total,value){
    
    return total+value;
    
}
console.log(single_value);//i35

//can accept initial value 
var initial_value=arr.reduce(reduceArray,100);
console.log(initial_value);//235

//The reduceRight() method runs a function on each array element to produce (reduce it to) a single value.

//The reduceRight() works from right-to-left in the array. See also reduce().

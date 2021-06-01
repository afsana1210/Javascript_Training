const fruits=["Banana","Apple","Mango"];
fruits.sort();//[ 'Apple', 'Banana', 'Mango' ]
console.log(fruits);

fruits.reverse();
console.log(fruits);

//sort numbers in acending order
const arr=[25,33,4,5,100,6,10];
arr.sort(function(a,b){return a-b});
console.log(arr);/*[
    4,  5,   6, 10,
   25, 33, 100
 ]*/

 //sort array of number in descending order
 arr.sort(function(a,b){return b-a});
 console.log(arr);/*[
    100, 33, 25, 10,
      6,  5,  4
  ]*/

  //min value of array
  arr.sort(function(a,b){return a-b});
  console.log(arr[0]);//4
 //max value of array
  console.log(arr[arr.length-1]);//100

  //simple way to get min value of array
  console.log(Math.min.apply(null,arr));//4

  console.log(Math.max.apply(null,arr));//100

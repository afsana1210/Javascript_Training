var array=["a","b",1,2,3,1.2,true,false];
console.log(array[6]);//true
console.log(array);//access full array

var arr=[
    [1,2,3],
{name:"afs",
age:20},
1,
true
];
console.log(arr[0][0]);//1
console.log(arr[0]);//[ 1, 2, 3 ]
console.log(arr[1]);//{ name: 'afs', age: 20 }
console.log(Object.keys(arr[1]));//[ 'name', 'age' ]

let len=arr.length;
console.log(len);//4

//accessing the last element of array
var lastElement=arr[len-1];//true
console.log(lastElement);//true


///The splice() method can be used to add new items to an array:
let fruits=["Apple","Banana","Kiwi"];
var s=fruits.splice(2,2,"papaya","guava");//2->add new element position ,2->2 element delete from array,("abc","pqr")new element to be added at position 2
console.log(s);//[ 'Kiwi' ]

console.log(fruits);//[ 'Apple', 'Banana', 'papaya', 'guava' ]

//The first parameter (0) defines the position where new elements should be added (spliced in).

//The second parameter (1) defines how many elements should be remove

fruits.splice(0,1);
console.log(fruits);//[ 'Banana', 'papaya', 'guava' ]
const fruits=["Apple","Banana","Mango"];
var arr_to_string=fruits.toString();
console.log(arr_to_string)//Apple,Banana,Mango

var arr_to_str=fruits.join("");
console.log(arr_to_str);//AppleBananaMango

var last_element=fruits.pop()
console.log(last_element);//Mango

var elem=fruits.pop(1);
console.log(elem);//Banana

//add element at the end
fruits.push("Kiwi");
console.log(fruits);//[ 'Apple', 'Kiwi' ]

//The push() method returns the new array length:
var len=fruits.push("papaya");
console.log(len);//3

//The shift() method removes the first array element and "shifts" all other elements to a lower index.
var x=fruits.shift();
console.log(x);//[ 'Kiwi', 'papaya' ]

//The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
fruits.unshift("watermelon");
console.log(fruits);//[ 'watermelon', 'Kiwi', 'papaya' ]

var len=fruits.unshift("guava");
console.log(len);//4

//The splice() method can be used to add new items to an array:
fruits.splice(2,0,"abc","pqr");//2->add new element position ,0->0 element delete from array,("abc","pqr")new element to be added 
console.log(fruits)//[ 'guava', 'watermelon', 'abc', 'pqr', 'Kiwi', 'papaya' ]

fruits.splice(2,2,"x");
console.log(fruits);//[ 'guava', 'watermelon', 'x', 'Kiwi', 'papaya' ]


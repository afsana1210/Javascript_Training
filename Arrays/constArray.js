//An array declared with const cannot be reassigned:for example fruits=["kiwi"] it gives error

//It does NOT define a constant array. It defines a constant reference to an array.
//Because of this, we can still change the elements of a constant array.

const fruits=["Apple","Banana","Mango"];
fruits[0]="kiwi";//changed the element apple to kiwi
console.log(fruits);
fruits.push("papaya");//add element at the end of an array
console.log(fruits);
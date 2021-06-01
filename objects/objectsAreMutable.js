//Objects are mutable: They are addressed by reference, not by value.
var person={
    firstName:"John",
    lastName:"Smith",
    age:20,
};
var x=person; // This will not create a copy of person.
console.log(person.age);
x.age=10;//This will change both x.age and person.age
console.log(person.age);
var student={
    id:101,
    firstName:"Alina",
    lastName:"Smith",
    age:20,
    fullname:function(){
        return this.firstName+" "+this.lastName;
    }//Methods are stored in properties as function definitions.

};
console.log(student.firstName);
console.log(student.fullname());
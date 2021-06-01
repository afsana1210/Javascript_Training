var student={
    firstName:"John",
    lastName:"Smith",
    age:20,
};

var txt=" ";
for(var x in student){

   txt +=student[x]+" ";

}

console.log(txt);

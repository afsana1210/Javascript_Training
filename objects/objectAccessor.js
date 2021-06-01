var student={
    firstName:"John",
    lastName:"Smith",
    age:20,
    language:"en",
    get lang(){
        return this.language;
    },
    set lang(lang){
      this.language=lang;
    }
};
console.log(student.lang);
student.lang="French";
console.log(student.language);

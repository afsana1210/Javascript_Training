class car{
    constructor(name,year){
        this.name=name;
        this.year=year;
    }
    age(){
        let d=new Date();
        return d.getFullYear()-this.year
    }
}
let obj=new car("BMW",2019);
console.log("My "+obj.name +" car is "+ obj.age() + " years old");
class car{
    constructor(name){
        this.name=name;
    }
    present(){
        return "I have a "+this.name;
    }
}
class Model extends car{
    constructor(brand,mod){
        super(brand)
        this.model=mod;
        
    }
    show(){
        return this.present()+" , it is a "+this.model;
    }
}
let mycar=new Model("Ford","Mustang");
console.log(mycar.show());
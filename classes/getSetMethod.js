//You can use the underscore character to separate the getter/setter from the actual property:
class car{
    constructor(carname){
        this._name=carname;
    }
    get carn(){
        return this._name;
    }
    set carn(x){
        this._name=x;
    }
}
let mycar=new car("BMW");
console.log(mycar.carn);
console.log(mycar.carn="Volvo");
function sum(...args){
    let sum=0;
    for(let arg of args){
        sum +=arg;
    }
    return sum;
}
const arguments=sum(1,2,44,55,3,6,2,2,3,7);
console.log(arguments);
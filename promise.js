inventory={
    sunglasses:1900,
    bags:1800,
    shoes:1500
};
const myExecutor=(resolve,reject)=>{
    if(inventory.sunglasses > 0){
        resolve("sunglasses order proceed.")
    }else {
        reject("The item is sold out")
    }
}
const orderSunglasses=()=>{
    return new Promise(myExecutor);
}
const orderPromise=orderSunglasses();
console.log(orderPromise);
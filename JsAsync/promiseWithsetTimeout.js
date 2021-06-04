const returnResult=()=>{
    return new Promise((resolve,reject)=>{
    setTimeout(() => {resolve("hello world");
        
    }, 1000);
});
}
const prom=returnResult();
const asyncResult=prom.then((value)=>{
    console.log(value);
})
console.log(asyncResult);

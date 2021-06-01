const returnPromiseFunction=()=>{
    return new Promise((resolve,reject)=>{
        console.log("hello");
      setTimeout(()=>{resolve("I resolved!")},2000);
    });
};

const prom=returnPromiseFunction();
console.log(prom);
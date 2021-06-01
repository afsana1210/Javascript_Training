const prom=new Promise((resolve,reject)=>{
    resolve("Yay!");
});
const successHandler=(resolvedValue)=>{
    console.log(resolvedValue);
}

prom.then(successHandler);
const prom=new Promise((resolve,reject)=>{
    let num=Math.random();
    console.log(num);
    if(num < .5){
        resolve("Yay!");
    }else{
        reject("ohh no!");
    }
});
    
    

const successHandler=(resolvedValue)=>{
    console.log(resolvedValue);
}

const failureHandler=(rejectedValue)=>{
    console.log(rejectedValue);
}

prom.then(successHandler,failureHandler);
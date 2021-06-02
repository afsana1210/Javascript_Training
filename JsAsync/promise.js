let promise=new Promise((resolve,reject)=>{
    const x=0;
    if(x==0){
        resolve("OK");
    }else{
        reject("error");
    }
})
const successhandler=(value)=>console.log(value);

const failurehandler=(error)=>console.log(error);
promise.then(successhandler,failurehandler);
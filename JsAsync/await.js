async function myfunction(){
    let mypromise=new Promise((resolve,reject)=>{
        console.log("I resolved!");
    });
    const result=await mypromise;
    console.log(result);
}
myfunction();


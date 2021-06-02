async function myfunction(){
    let mypromise=new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("I resolved!")
        }, 2000);
    });
    const result=await mypromise;
    //console.log(result);
    return result;
}
myfunction().then(function(value){
    console.log(value);
})
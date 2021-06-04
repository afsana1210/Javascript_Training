async function noAwait() {
    // const myPromise= new Promise((resolve,reject)=>{
    //     resolve(" Yay, I resolved!");
    // });
    
    let myPromise =new Promise((resolve,reject)=>{
            resolve(" Yay, I resolved!");
    });
    let value=myPromise;
    console.log(value);
   }
    
   async function yesAwait() {
    let myPromise =new Promise((resolve,reject)=>{
        resolve(" Yay, I resolved!");
});
    let value = await myPromise;
    console.log(value);
   }
    
   noAwait(); // Prints: Promise { <pending> }
   yesAwait(); // Prints: Yay, I resolved!
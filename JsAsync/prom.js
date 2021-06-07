console.log("hi 1");
setTimeout(()=>{
    console.log("hi 2")},0);
setTimeout(()=>{
        console.log("hi 3")},0);


console.log("hi 5");

/*
hi 1
hi 4
hi 2
hi 3
*/

setTimeout(()=>{
    console.log("hi 4")},1000);

   /* hi 1
    hi 5
    hi 2
    hi 3
    hi 4
    */
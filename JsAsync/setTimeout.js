setTimeout(myfunction,3000);

function myfunction(){
    console.log("Hello world");
}

setTimeout(function(){
  console.log("complete function inside setTimeout")
},2000);